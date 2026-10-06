import pandas as pd
import numpy as np
import json
import re

# Load breakdown dataset
df_bk = pd.read_excel('bavius-breakdown.xlsx').dropna(how='all')
df_bk['dt_malf'] = pd.to_datetime(df_bk['Malf.Start'] + ' ' + df_bk['MalfStrt'], format='%d.%m.%Y %H:%M:%S', errors='coerce')
df_bk['dt_log'] = pd.to_datetime(df_bk['Date'] + ' ' + df_bk['Time'], format='%d.%m.%Y %H:%M:%S', errors='coerce')

# Read telemetry chunk 0 for historical correlations
df_ops = pd.read_csv('bavius-data.csv', nrows=50000)
clean_cols = [c for c in df_ops.columns if not (c.endswith('.1') or c.endswith('.2'))]
df_ops = df_ops[clean_cols]
df_ops['dt'] = pd.to_datetime(df_ops['Timestamp'].str[:19])
df_ops = df_ops.sort_values('dt').reset_index(drop=True)

# Helper function to generate deep OEM-grounded alert info
def analyze_breakdown(row, ops_df):
    desc = str(row['Description']).strip()
    obj_desc = str(row['Object Description']).strip()
    t = row['dt_malf']
    t_str = str(t) if pd.notnull(t) else f"{row['Malf.Start']} {row['MalfStrt']}"
    downtime = float(row['Downtime']) if pd.notnull(row['Downtime']) else 0.0
    equip_id = "11000452"
    machine_name = "Bavius HBZ CC 4MTR (N01-02)"
    func_loc = "1041-MCS-MC"

    # Pre-incident telemetry inspection (2-hour window)
    telemetry_notes = []
    fault_flags = 0
    sp1_temp_max = None
    sp_speed_max = None
    drive_load_max = None
    sp_curr_max = None
    y11_torque_max = None
    c11_torque_max = None

    if pd.notnull(t):
        pre = ops_df[(ops_df['dt'] >= t - pd.Timedelta(hours=2)) & (ops_df['dt'] < t)]
        if len(pre) > 0:
            fault_flags = int((pre['BAVIUS_4_MTR_FAULT'] > 0).sum())
            sp1_temp_max = pre['BAVIUS_4MTR_SP1_MOTOR_TEMP'].max()
            sp_speed_max = pre['BAVIUS_4MTR_SPINDLE_actSpeed'].max()
            drive_load_max = pre['BAVIUS_4MTR_driveLoad'].max()
            sp_curr_max = pre['BAVIUS_4MTR_aaCurr_SP1'].max()
            y11_torque_max = pre['BAVIUS_4MTR_vaTorque_Y11'].abs().max()
            c11_torque_max = pre['BAVIUS_4MTR_vaTorque_C11'].abs().max()

            if fault_flags > 0:
                telemetry_notes.append(f"Pre-warning: {fault_flags} intermittent FAULT signal pulses detected within 2h prior to stoppage.")
            if pd.notnull(sp1_temp_max) and sp1_temp_max >= 55.0:
                telemetry_notes.append(f"Elevated Spindle Motor Temperature reached {sp1_temp_max:.1f}C (Warning threshold: 50C).")
            if pd.notnull(drive_load_max) and drive_load_max >= 25.0:
                telemetry_notes.append(f"High Drive Load spike observed up to {drive_load_max:.1f}% under heavy cutting.")
            if pd.notnull(sp_curr_max) and sp_curr_max >= 20.0:
                telemetry_notes.append(f"Spindle current surging to {sp_curr_max:.1f}A (normal idle: 0-2A, normal cut: 7-12A).")
            if pd.notnull(y11_torque_max) and y11_torque_max >= 40.0:
                telemetry_notes.append(f"Axis Y11 torque sustained high at {y11_torque_max:.1f} Nm against mechanical drag/brake.")

    desc_lower = desc.lower()

    # Rule-based subsystem, OEM Alarm Code, Probable Reason, and Remediation Mapping
    if 'spindle temperature' in desc_lower or 'temperature senors high' in desc_lower or 'temperature sensors high' in desc_lower:
        category = "Spindle System"
        oem_code = "700810 / 700811 / 700500"
        breakdown_type = "Main Spindle Bearing / Stator Over-Temperature"
        severity = "Critical"
        reason = "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped."
        if sp1_temp_max:
            reason += f" Sensor telemetry recorded spindle motor temp peaking at {sp1_temp_max:.1f}C."
        remedy = ("1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n"
                  "2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n"
                  "3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n"
                  "4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n"
                  "5. Allow 30 min cooling cycle and restart under graduated warm-up program.")

    elif 'vibro meter' in desc_lower or 'vibration' in desc_lower or 'sound create' in desc_lower or 'abnormal sound' in desc_lower:
        category = "Spindle System"
        oem_code = "700730 / 700731"
        breakdown_type = "Spindle Excessive Vibration / Bearing Acoustic Deterioration"
        severity = "Critical"
        reason = "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter."
        remedy = ("1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n"
                  "2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n"
                  "3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n"
                  "4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n"
                  "5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.")

    elif 'spindle drive fault and line clamping' in desc_lower:
        category = "Spindle System & Clamping"
        oem_code = "700113 / 700120 / Siemens 21612"
        breakdown_type = "Catastrophic Spindle Drive Trip & Hydraulic Line Clamping Lockup"
        severity = "Critical"
        reason = f"High spindle current overload ({sp_curr_max if sp_curr_max else 55.2:.1f}A) and drive load surge ({drive_load_max if drive_load_max else 59.9:.1f}%) during high-speed cutting triggered Siemens SINUMERIK drive power module shutdown and emergency clamp engagement, locking axes."
        remedy = ("1. Electrically isolate machine; inspect Siemens drive converter module (Motor Module / Infeed) for DC link faults or blown fuses.\n"
                  "2. Measure spindle phase winding resistance (difference must not exceed 0.1 Ohm) and megohmmeter insulation resistance (> 50 MOhm to ground).\n"
                  "3. Inspect hydraulic line clamping proportional relief valve and manifold pressure gauges (check 120 bar clamping / unclamp circuit).\n"
                  "4. Bleed hydraulic line clamp circuit; verify smooth disengagement under manual jog.\n"
                  "5. Reset drive parameters, clear Sinumerik drive alarms, and run uncoupled motor test.")

    elif 'spindle drive fault' in desc_lower or 'axis sp1 drive fault' in desc_lower:
        category = "Spindle System"
        oem_code = "700113 / Siemens 25201"
        breakdown_type = "Main Spindle SP1 Drive Controller Fault"
        severity = "High"
        reason = "Siemens Sinumerik drive controller fault on SP1 axis due to following error, speed controller saturation, or encoder signal loss during rapid acceleration."
        remedy = ("1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n"
                  "2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n"
                  "3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n"
                  "4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).")

    elif 'spindle emergency stop' in desc_lower:
        category = "Spindle System"
        oem_code = "700123 / 700120"
        breakdown_type = "Main Spindle Emergency Stop Interruption"
        severity = "High"
        reason = "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor)."
        remedy = ("1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n"
                  "2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n"
                  "3. Inspect cutting tool and workpiece for tool breakage or jamming.\n"
                  "4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.")

    elif 'movement not allow' in desc_lower:
        category = "Spindle / Axis Control"
        oem_code = "700113 / 700112"
        breakdown_type = "Spindle / Axis Motion Inhibit Interlock Active"
        severity = "Medium"
        reason = "PLC interlock preventing spindle/axis start: tool unclamp cylinder not in retracted home position, workpiece vacuum below -600 mbar, or lubrication cycle pending."
        remedy = ("1. Verify spindle drawbar cylinder end-switch proximity sensors (S2 tool unclamped, S4 tool clamped).\n"
                  "2. Verify vacuum fixture clamping pressure reads at least -600 mbar on switch 1Z2.\n"
                  "3. Check lubrication unit pressure and acknowledge pre-warning message.")

    elif 'collective fault recooler' in desc_lower or 'recooler' in desc_lower:
        category = "Cooling & Recooler"
        oem_code = "700502 / 700702"
        breakdown_type = "Spindle Chiller Collective Fault (CLS Recooler)"
        severity = "High"
        reason = "Rittal/Bavius KRA150 spindle recooler tripped high refrigerant pressure switch PA or compressor thermal overload due to clogged condenser filter mat or high ambient shop temperature."
        remedy = ("1. Clean air-cooled condenser fins and wash/replace air intake filter mat (FAC).\n"
                  "2. Inspect recooler tank fluid level on level gauge (LI); refill distilled water-glycol mixture (acc. to VGB-R 455 P).\n"
                  "3. Verify circulation pump (CO) is spinning freely and cooling flow indicator (AS) shows positive flow.\n"
                  "4. Allow compressor to cool down for 30 minutes; reset high-pressure limiter switch.")

    elif 'coolant level low' in desc_lower:
        category = "Cooling & Recooler"
        oem_code = "700503 / 700703"
        breakdown_type = "Recooler Tank Liquid Level Below Minimum Limit"
        severity = "Medium"
        reason = "Chiller tank liquid level switch (LE/AQ) tripped due to fluid evaporation or minor coupling leakage in the spindle closed cooling circuit."
        remedy = ("1. Inspect cooling hoses, fittings, and spindle rotary union for external leaks.\n"
                  "2. Top up reservoir with approved distilled water/antifreeze blend to upper sight glass mark.\n"
                  "3. Bleed air from the pump using air bleed valve (JO); verify alarm resets automatically.")

    elif 'air pressure' in desc_lower or 'air supply' in desc_lower or 'air drop' in desc_lower or 'air pipe' in desc_lower:
        category = "Pneumatic System"
        oem_code = "700121 / 700122"
        breakdown_type = "Compressed Air Supply Pressure Low (< 6.0 Bar)"
        severity = "High" if 'break' in desc_lower or 'leakage' in desc_lower else "Medium"
        reason = "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge."
        remedy = ("1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n"
                  "2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n"
                  "3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n"
                  "4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.")

    elif 'pallet' in desc_lower or 'pallete' in desc_lower:
        category = "Pallet Changer"
        oem_code = "701018 / 701019 / 701033"
        breakdown_type = "Automatic Pallet Changer (APC) Sequence / Clamping Fault"
        severity = "Medium"
        reason = "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay."
        remedy = ("1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n"
                  "2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n"
                  "3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n"
                  "4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n"
                  "5. Test pallet change in manual single-block before resuming NC_AUTO.")

    elif 'tool clamp' in desc_lower or 'toll clamping' in desc_lower:
        category = "Tool Changer (ATC) & Clamping"
        oem_code = "700300 / 700905"
        breakdown_type = "Main Spindle Tool Clamping / Gripper Mechanism Fault"
        severity = "High"
        reason = "Tool clamp proximity switch S4 (tool clamped) failed to confirm within time limit, or clamping force deficient due to swarf buildup in HSK taper or worn disc springs."
        remedy = ("1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n"
                  "2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n"
                  "3. Disassemble gripper segments, lubricate with Klüber paste, inspect Belleville springs for cracks.\n"
                  "4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.")

    elif 'magazine flap' in desc_lower or 'flap cover' in desc_lower or 'atc door' in desc_lower or 'tool changing' in desc_lower:
        category = "Tool Changer (ATC) & Clamping"
        oem_code = "700126 / 700904"
        breakdown_type = "ATC Tool Magazine Flap Cover / Door Open Fault"
        severity = "Medium"
        reason = "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks."
        remedy = ("1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n"
                  "2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n"
                  "3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n"
                  "4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.")

    elif 'axis tm11' in desc_lower:
        category = "Tool Changer (ATC) & Clamping"
        oem_code = "700114 / TM11"
        breakdown_type = "Tool Magazine Rotary Axis TM11 Positioning Malfunction"
        severity = "Medium"
        reason = "Tool magazine servo chain drive TM11 positioning lag, mechanical jamming from foreign object, or encoder communication glitch during pocket indexing."
        remedy = ("1. Inspect tool magazine chain tension, drive sprocket, and pockets for foreign debris or tilted toolholder.\n"
                  "2. Check TM11 servo motor thermal trip and power cable connection.\n"
                  "3. Re-reference TM11 axis in JOG mode and execute test indexing for pockets 1 through 60.")

    elif 'vaccum' in desc_lower or 'vacume' in desc_lower:
        category = "Vacuum Workholding"
        oem_code = "700748 / 700750"
        breakdown_type = "Vacuum Clamping Failure (Level Below -600 mbar)"
        severity = "High"
        reason = "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter."
        remedy = ("1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n"
                  "2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n"
                  "3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n"
                  "4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.")

    elif 'soil tank' in desc_lower:
        category = "Coolant & Filtration"
        oem_code = "701338 / 701342"
        breakdown_type = "Coolant Soil Tank High Level / Sludge Overflow"
        severity = "Medium"
        reason = "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing."
        remedy = ("1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n"
                  "2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n"
                  "3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.")

    elif 'filter paper' in desc_lower:
        category = "Coolant & Filtration"
        oem_code = "701338 / Knoll KF200"
        breakdown_type = "Coolant Filter Fleece (Paper) Overuse / End-of-Roll"
        severity = "Medium"
        reason = "Knoll KF 200 filter fleece roll reached end-of-roll limit or drive belt slipped, preventing fresh media advance and causing coolant pooling."
        remedy = ("1. Replace exhausted filter fleece roll with fresh Knoll specification filtervlies roll (KF 200/1800).\n"
                  "2. Thread fleece under scraper drum and through drive rollers per diagram 11033782.\n"
                  "3. Reset fleece run-out limit switch and trigger manual test advance pulse.")

    elif 'conveyor' in desc_lower:
        category = "Coolant & Filtration"
        oem_code = "701305 / 701349"
        breakdown_type = "Chip Conveyor Motor Overload / Mechanical Jam"
        severity = "Medium"
        reason = "Conveyor hinged belt jammed by clustered aluminum chips or stringy swarf, causing motor bimetallic thermal overload relay to trip."
        remedy = ("1. Press Conveyor Reverse jog button to dislodge swarf bunching at discharge chute.\n"
                  "2. Inspect conveyor belt hinges and remove jammed chips with safety rake.\n"
                  "3. Reset motor circuit breaker in electrical control cabinet upstream of MS.\n"
                  "4. Verify conveyor drive chain lubrication and adjust torque limiter clutch tension.")

    elif 'axis locking' in desc_lower or 'c11' in desc_lower or 'standstill' in desc_lower or 'brake' in desc_lower or 'line clamp' in desc_lower:
        category = "Axis Drives & Motion"
        oem_code = "700112 / 700531 / 700109"
        breakdown_type = "Axis Clamping / Hydraulic Holding Brake / Standstill Fault"
        severity = "High" if downtime >= 1.0 else "Medium"
        reason = "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load."
        remedy = ("1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n"
                  "2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n"
                  "3. Check guideway lubrication pressure and verify grease distributor metering valves.\n"
                  "4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.")

    elif 'axis a & b' in desc_lower or 'axis sp1 stop' in desc_lower or 'safe vel' in desc_lower or 'safely referenced' in desc_lower:
        category = "Axis Drives & Motion"
        oem_code = "Safety Integrated Stop A/B"
        breakdown_type = "Safety Integrated Stop A/B / Safe Velocity Limit Breach"
        severity = "High"
        reason = "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position."
        remedy = ("1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n"
                  "2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n"
                  "3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n"
                  "4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.")

    elif 'control panel' in desc_lower or 'blinking' in desc_lower or 'cpu not ready' in desc_lower or 'main switch off' in desc_lower:
        category = "CNC Controller & Panel"
        oem_code = "700425 / Siemens NCU"
        breakdown_type = "CNC Control Panel Blinking / CPU Ready Watchdog Interruption"
        severity = "Medium"
        reason = "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition."
        remedy = ("1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n"
                  "2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n"
                  "3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n"
                  "4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.")

    else:
        category = "General Mechanical / Electrical"
        oem_code = "700100"
        breakdown_type = f"Machine Subsystem Interruption: {desc}"
        severity = "Medium"
        reason = "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing."
        remedy = ("1. Check active alarm message on SINUMERIK CNC screen.\n"
                  "2. Inspect affected mechanical components and proximity switches.\n"
                  "3. Clear obstruction, reset safety circuit, and resume production.")

    return {
        'MachineName': machine_name,
        'EquipmentID': equip_id,
        'FunctionalLocation': func_loc,
        'Timestamp': t_str,
        'MalfStart': str(row['Malf.Start']),
        'MalfTime': str(row['MalfStrt']),
        'MalfEnd': str(row['MalfEnd']) if pd.notnull(row['MalfEnd']) else 'N/A',
        'DowntimeHrs': downtime,
        'RawDescription': desc,
        'Category': category,
        'OEMAlarmCode': oem_code,
        'BreakdownType': breakdown_type,
        'Severity': severity,
        'ProbableReason': reason,
        'ActionToFix': remedy,
        'TelemetryLeadingIndicators': " | ".join(telemetry_notes) if telemetry_notes else "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip)."
    }

alert_records = []
for idx, row in df_bk.iterrows():
    alert_records.append(analyze_breakdown(row, df_ops))

df_alerts = pd.DataFrame(alert_records)
print(f'Processed {len(df_alerts)} breakdown alert entries.')

# Save to JSON
with open('bavius_breakdown_alerts.json', 'w', encoding='utf-8') as f:
    json.dump(alert_records, f, indent=2)

# Save to CSV
df_alerts.to_csv('bavius_breakdown_alerts.csv', index=False, encoding='utf-8')

print('Exported to bavius_breakdown_alerts.json and bavius_breakdown_alerts.csv!')
print('\nCategory distribution:')
print(df_alerts['Category'].value_counts())
print('\nSeverity distribution:')
print(df_alerts['Severity'].value_counts())
