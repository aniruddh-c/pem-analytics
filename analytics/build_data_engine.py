#!/usr/bin/env python3
"""
TASL PEM AI Reliability Engineer - Data Compilation & Analytics Generator
"""

import json
import os
import re
import pandas as pd
import numpy as np
import datetime
from collections import defaultdict

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANALYTICS_DIR = os.path.join(BASE_DIR, 'analytics')
DASHBOARD_DIR = os.path.join(BASE_DIR, 'dashboard')

def main():
    print("Building TASL PEM AI Reliability Engineer Analytics & Telemetry Engine...")

    # Load raw alerts data
    alerts_json_path = os.path.join(ANALYTICS_DIR, 'bavius_breakdown_alerts.json')
    with open(alerts_json_path, 'r', encoding='utf-8') as f:
        alerts_data = json.load(f)

    type_occurrences = defaultdict(list)
    for alert in alerts_data:
        btype = alert.get('BreakdownType', 'General Maintenance')
        timestamp = alert.get('Timestamp', '')
        type_occurrences[btype].append(timestamp)

    enriched_alerts = []
    for i, a in enumerate(alerts_data):
        btype = a.get('BreakdownType', 'General Maintenance')
        dates = sorted(type_occurrences[btype], reverse=True)
        count = len(dates)
        last_date = dates[0].split(' ')[0] if dates else 'N/A'
        past_incidents_text = f"{count} times in last 6 months (Last: {last_date})"

        sev = a.get('Severity', 'Medium')
        action_raw = a.get('ActionToFix', '')
        lines = [line.strip() for line in action_raw.split('\n') if line.strip()]
        numbered_steps = []
        for step_idx, line in enumerate(lines, 1):
            clean_line = re.sub(r'^\d+\.\s*', '', line)
            numbered_steps.append(f"{step_idx}. {clean_line}")
        suggested_fix = "\n".join(numbered_steps)

        machine_name = a.get('MachineName', 'Bavius 4mtr N01-02')
        clean_machine = 'Bavius 4mtr N01-02' if 'Bavius' in machine_name else machine_name

        rec = {
            'Timestamp': a.get('Timestamp', ''),
            'Machine': clean_machine,
            'EquipmentID': a.get('EquipmentID', '11000452'),
            'Category': a.get('Category', 'Spindle System'),
            'BreakdownType': btype,
            'OEMAlarmCode': a.get('OEMAlarmCode', '700100'),
            'Severity': sev,
            'PastIncidents': past_incidents_text,
            'PastIncidentsCount': count,
            'LastOccurred': last_date,
            'ProbableReason': a.get('ProbableReason', ''),
            'TelemetryLeadingIndicators': a.get('TelemetryLeadingIndicators', ''),
            'SuggestedFix': suggested_fix,
            'ActionToFix': action_raw,
            'TimeToBreakdown': 'XX:XX hrs',
            'DowntimeHrs': a.get('DowntimeHrs', 0.5)
        }
        enriched_alerts.append(rec)

    with open(os.path.join(ANALYTICS_DIR, 'bavius_breakdown_alerts.json'), 'w', encoding='utf-8') as f:
        json.dump(enriched_alerts, f, indent=2)

    pd.DataFrame(enriched_alerts).to_csv(os.path.join(ANALYTICS_DIR, 'bavius_breakdown_alerts.csv'), index=False)

    plants = [
        {
            "id": "TSAL",
            "name": "TSAL",
            "fullName": "TSAL - Advanced Precision Machining Facility",
            "totalMachines": 16,
            "running": 10,
            "idle": 2,
            "alarm": 1,
            "shutdown": 2,
            "breakdown": 1
        },
        {
            "id": "TASL-NGP",
            "name": "TASL-NGP",
            "fullName": "TASL Defense & Aerostructures - Nagpur",
            "totalMachines": 12,
            "running": 6,
            "idle": 3,
            "alarm": 2,
            "shutdown": 0,
            "breakdown": 1
        },
        {
            "id": "TCOE",
            "name": "TCOE",
            "fullName": "Tata Center of Excellence - Advanced Manufacturing",
            "totalMachines": 8,
            "running": 5,
            "idle": 0,
            "alarm": 0,
            "shutdown": 3,
            "breakdown": 0
        },
        {
            "id": "TASL-BLR",
            "name": "TASL-BLR",
            "fullName": "TASL Aero Avionics & Systems - Bengaluru",
            "totalMachines": 6,
            "running": 4,
            "idle": 1,
            "alarm": 0,
            "shutdown": 1,
            "breakdown": 0
        },
        {
            "id": "TASL-XXX",
            "name": "TASL-XXX",
            "fullName": "TASL-XXX (Future Facility Expansion)",
            "totalMachines": 0,
            "running": 0,
            "idle": 0,
            "alarm": 0,
            "shutdown": 0,
            "breakdown": 0
        }
    ]

    machines = [
        {
            "id": "bavius-01",
            "plantId": "TSAL",
            "name": "Bavius HBZ AeroCell 200/100",
            "model": "HBZ Compact Cell 200/100",
            "oem": "Bavius Technologie GmbH",
            "stationId": "MS-01-02",
            "plantLocation": "TSAL - Precision Machining Bay",
            "status": "ALARM",
            "statusColor": "amber",
            "healthScore": 68,
            "greenCount": 50,
            "yellowCount": 9,
            "redCount": 3,
            "statusDuration": "01H 14M 22S",
            "desc": "Horizontal High-Speed CNC Machining Center with 30,000 RPM Fischer MFW-1920 Spindle, dual gantry drives, tool magazine, and vacuum clamping."
        },
        {
            "id": "fanuc-01",
            "plantId": "TSAL",
            "name": "Fanuc Robodrill α-D21LiB5",
            "model": "5-Axis High-Speed VMC",
            "oem": "FANUC Corporation",
            "stationId": "AE-02-04",
            "plantLocation": "TSAL - High-Speed Drilling Cell",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 92,
            "greenCount": 62,
            "yellowCount": 2,
            "redCount": 0,
            "statusDuration": "04H 28M 11S",
            "desc": "5-axis rapid aluminum drilling & milling cell with BBT30 24,000 RPM spindle."
        },
        {
            "id": "breton-k60",
            "plantId": "TSAL",
            "name": "Breton K60 5-Axis",
            "model": "Matrix 800 - 60k RPM",
            "oem": "Breton S.p.A.",
            "stationId": "MS-03-15",
            "plantLocation": "TSAL - High Precision Bay 2",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 79,
            "greenCount": 60,
            "yellowCount": 8,
            "redCount": 2,
            "statusDuration": "00H 24M 11S",
            "desc": "High-speed 5-axis gantry with hydrostatic guideways and 60,000 RPM electrospindle."
        },
        {
            "id": "breton-k80",
            "plantId": "TSAL",
            "name": "Breton K80 Heavy Gantry",
            "model": "Flymill 2000 Titanium Cell",
            "oem": "Breton S.p.A.",
            "stationId": "MSD_MS-03-16",
            "plantLocation": "TSAL - Heavy Structural Bay",
            "status": "SHUTDOWN",
            "statusColor": "blue",
            "healthScore": 95,
            "greenCount": 62,
            "yellowCount": 1,
            "redCount": 0,
            "statusDuration": "02H 44M 11S",
            "desc": "Heavy-duty 5-axis gantry machine for titanium aerospace structural bulkheads."
        },
        {
            "id": "makino-t1",
            "plantId": "TSAL",
            "name": "Makino T1 5-Axis",
            "model": "ADV Titanium Machining Center",
            "oem": "Makino Milling Machine Co.",
            "stationId": "MS-02-09",
            "plantLocation": "TSAL - Titanium Complex Cell",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 88,
            "greenCount": 61,
            "yellowCount": 3,
            "redCount": 1,
            "statusDuration": "06H 12M 40S",
            "desc": "High-torque 1,000 Nm spindle titanium machining center with autonomous pallet changer."
        },
        {
            "id": "modig-03c",
            "plantId": "TSAL",
            "name": "Modig HHV3 C",
            "model": "Horizontal High Velocity Extrusion Cell",
            "oem": "Modig Machine Tool Sweden",
            "stationId": "MS-04-01",
            "plantLocation": "TSAL - Extrusion Milling Bay",
            "status": "BREAKDOWN",
            "statusColor": "red",
            "healthScore": 42,
            "greenCount": 51,
            "yellowCount": 9,
            "redCount": 4,
            "statusDuration": "03H 45M 14S",
            "desc": "Aerospace beam and stringer continuous bar-feed machining center."
        },
        {
            "id": "makino-mag3",
            "plantId": "TSAL",
            "name": "Makino MAG3 5-Axis",
            "model": "MAG3.EX Horizontal Profiler",
            "oem": "Makino Milling Machine Co.",
            "stationId": "MS-01-08",
            "plantLocation": "TSAL - Wing Spar Bay",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 89,
            "greenCount": 61,
            "yellowCount": 4,
            "redCount": 1,
            "statusDuration": "05H 22M 19S",
            "desc": "5-axis horizontal profiler for aerospace structural aluminum monolithic components."
        },
        {
            "id": "dmg-dmu80",
            "plantId": "TSAL",
            "name": "DMG MORI DMU 80 P",
            "model": "duoBLOCK 5-Axis Mill-Turn",
            "oem": "DMG MORI AG",
            "stationId": "MS-02-14",
            "plantLocation": "TSAL - Engine Mount Cell",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 94,
            "greenCount": 62,
            "yellowCount": 2,
            "redCount": 0,
            "statusDuration": "07H 15M 00S",
            "desc": "Universal mill-turn center with high dynamic duoBLOCK structure."
        },
        {
            "id": "starrag-hec800",
            "plantId": "TSAL",
            "name": "Starrag Heckert HEC 800",
            "model": "HEC 800 X5 High-Torque",
            "oem": "Starrag Group Switzerland",
            "stationId": "MS-03-04",
            "plantLocation": "TSAL - Inconel & Titanium Cell",
            "status": "IDLE",
            "statusColor": "amber",
            "healthScore": 82,
            "greenCount": 58,
            "yellowCount": 6,
            "redCount": 1,
            "statusDuration": "00H 52M 30S",
            "desc": "High precision 5-axis machining center for tough aircraft alloys and landing gear."
        },
        {
            "id": "matsuura-mam72",
            "plantId": "TSAL",
            "name": "Matsuura MAM72-63V",
            "model": "5-Axis High Performance Center",
            "oem": "Matsuura Machinery Corp.",
            "stationId": "MS-02-18",
            "plantLocation": "TSAL - Precision Actuator Cell",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 91,
            "greenCount": 62,
            "yellowCount": 1,
            "redCount": 0,
            "statusDuration": "08H 40M 12S",
            "desc": "Multi-pallet 5-axis machining center dedicated to aerospace valve manifold housings."
        },
        {
            "id": "mazak-vortex",
            "plantId": "TSAL",
            "name": "Mazak Vortex i-800V/8",
            "model": "5-Axis Vertical Machining Center",
            "oem": "Yamazaki Mazak Corp.",
            "stationId": "MS-01-11",
            "plantLocation": "TSAL - Bulkhead Profiling Cell",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 87,
            "greenCount": 60,
            "yellowCount": 5,
            "redCount": 0,
            "statusDuration": "03H 18M 45S",
            "desc": "Vertical 5-axis machining center with tilting spindle head for aero components."
        },
        {
            "id": "bavius-aerocell",
            "plantId": "TSAL",
            "name": "Bavius HBZ AeroCell 500",
            "model": "HBZ AeroCell Horizontal HPC",
            "oem": "Bavius Technologie GmbH",
            "stationId": "MS-01-05",
            "plantLocation": "TSAL - High-Velocity Milling Bay",
            "status": "IDLE",
            "statusColor": "amber",
            "healthScore": 76,
            "greenCount": 56,
            "yellowCount": 8,
            "redCount": 2,
            "statusDuration": "01H 08M 10S",
            "desc": "High-velocity horizontal aerostructure machining cell with pallet automation."
        },
        {
            "id": "grob-g550",
            "plantId": "TSAL",
            "name": "Grob G550 5-Axis",
            "model": "G550 Universal Machining Center",
            "oem": "GROB-WERKE GmbH & Co. KG",
            "stationId": "MS-03-22",
            "plantLocation": "TSAL - Precision Flap Bay",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 93,
            "greenCount": 62,
            "yellowCount": 2,
            "redCount": 0,
            "statusDuration": "09H 04M 50S",
            "desc": "Horizontal spindle arrangement with maximum axis stability and tunnel concept."
        },
        {
            "id": "hermle-c52",
            "plantId": "TSAL",
            "name": "Hermle C 52 U MT",
            "model": "C 52 Dynamic Mill-Turn",
            "oem": "Maschinenfabrik Berthold Hermle AG",
            "stationId": "MS-02-01",
            "plantLocation": "TSAL - Turbine Discs Cell",
            "status": "SHUTDOWN",
            "statusColor": "blue",
            "healthScore": 96,
            "greenCount": 62,
            "yellowCount": 1,
            "redCount": 0,
            "statusDuration": "04H 12M 00S",
            "desc": "Dynamic 5-axis machining center for complex engine pylon brackets and mounts."
        },
        {
            "id": "okuma-mu8000",
            "plantId": "TSAL",
            "name": "Okuma MU-8000V",
            "model": "MU-8000V Laser EX Hybrid",
            "oem": "Okuma Corporation",
            "stationId": "MS-04-10",
            "plantLocation": "TSAL - Additive & Subtractive Bay",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 90,
            "greenCount": 61,
            "yellowCount": 3,
            "redCount": 1,
            "statusDuration": "02H 30M 14S",
            "desc": "Hybrid additive & 5-axis subtractive manufacturing center for aerospace prototyping."
        },
        {
            "id": "chiron-fz15",
            "plantId": "TSAL",
            "name": "Chiron FZ 15W High-Speed",
            "model": "FZ 15W Twin-Spindle VMC",
            "oem": "CHIRON Group SE",
            "stationId": "MS-01-20",
            "plantLocation": "TSAL - Secondary Bracket Line",
            "status": "RUNNING",
            "statusColor": "green",
            "healthScore": 85,
            "greenCount": 60,
            "yellowCount": 4,
            "redCount": 0,
            "statusDuration": "05H 45M 30S",
            "desc": "Twin-spindle high-speed vertical center with basket tool changer (0.9s chip-to-chip)."
        }
    ]

    top_causes = [
        {
            "rank": 1,
            "title": "Spindle Over-Temperature & Stator Saturation",
            "incidents": 17,
            "downtime": "85.33 hrs",
            "severity": "Critical",
            "param": "Spindle Motor Temp (> 60°C)",
            "rcca": "Continuous high-speed milling without adequate chiller recooler dwell. Root Cause Corrective Action: De-scale KRA150 chiller heat exchanger, replace G4 air filter mat, recalibrate flow monitor switch (alarm 700501), and execute graduated warm-up procedure.",
            "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2 (Pg. 84-88) & Rittal KRA150 Chiller Manual Ch. 4.3 (Pg. 42)"
        },
        {
            "rank": 2,
            "title": "Spindle Nose Vibration & Bearing Dynamic Runout",
            "incidents": 14,
            "downtime": "46.20 hrs",
            "severity": "Critical",
            "param": "Spindle Nose Vib (> 4.5 mm/s)",
            "rcca": "Unbalanced long-reach arbor milling tools and hybrid ceramic bearing ball raceway micro-pitting. Root Cause Corrective Action: Dynamic balancing of tool assemblies to ISO 1940 G2.5, replace front hybrid ceramic bearing pair (HC-7014), and verify air-oil lubrication pulse dosing.",
            "manualCitation": "SiViB Record 31 Manual, Section 4.1 (Pg. 31) & Fischer Spindle Manual Ch. 4.3 (Pg. 52)"
        },
        {
            "rank": 3,
            "title": "Compressed Air Supply Pressure Loss (< 6.0 Bar)",
            "incidents": 13,
            "downtime": "24.50 hrs",
            "severity": "High",
            "param": "Pneumatic Supply (< 5.5 bar)",
            "rcca": "Shop-floor ring main pressure depression during simultaneous tool changers cycling or clogged 0.01µm coalescing filter. Root Cause Corrective Action: Service Festo MS6-LFM microfilter cartridge, clear condensate auto-drain trap, and set machine pressure switch 1S1 to 6.2 bar.",
            "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3 (Pg. 116)"
        },
        {
            "rank": 4,
            "title": "Tool Changer (ATC) Gripper & Magazine Interruption",
            "incidents": 10,
            "downtime": "16.80 hrs",
            "severity": "High",
            "param": "Tool Clamping Belleville Force (< 18 kN)",
            "rcca": "Chips accumulation on inductive proximity sensor B47 or drawbar Belleville disc spring fatigue. Root Cause Corrective Action: Wash toolholder claw collets with ultrasonic solvent, clean sensor faces, and calibrate tool pull-in force with Ott-Jakob POWER-CHECK.",
            "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2 (Pg. 28-33)"
        },
        {
            "rank": 5,
            "title": "Axis Drive Motor Drag & Optical Scale Contamination",
            "incidents": 11,
            "downtime": "12.10 hrs",
            "severity": "Medium",
            "param": "Axis Y11/C11 Drive Torque (> 45 Nm)",
            "rcca": "Slideway hydraulic brake drag or sealing air purge pressure drop allowing fine aluminum chips onto Heidenhain linear glass scales. Root Cause Corrective Action: Check scale purge air pressure (alarm 700216), grease metering blocks, and perform brake test stop.",
            "manualCitation": "Bavius HBZ CC Operating Instructions, Section 3.4 (Pg. 98) & SiViB Record 31 (Pg. 24)"
        }
    ]

    oem_manuals = [
        {
            "id": "man-spindle",
            "title": "Fischer MFW-1920/30/1 Spindle Operating & Maintenance Manual",
            "model": "MFW-1920/30/1 HSK-A63 Hybrid Ceramic Spindle",
            "pdfUrl": "/manuals/04_Spindle/MFW_1920_30_1_EN.pdf",
            "pages": 123,
            "category": "Main Spindle",
            "highlights": "Rated 30,000 RPM HSC machining. Covers bearing temperature thresholds (50°C alarm, 65°C emergency trip), stator PTC thermistor resistance testing (< 3000 Ω), Ott-Jakob drawbar POWER-CHECK pull-in force calibration (min 18 kN), and dynamic runout limits (< 0.003 mm)."
        },
        {
            "id": "man-cooling",
            "title": "Rittal KRA150 Spindle Recooler / Chiller Technical Manual",
            "model": "KRA150A83369 Closed-Loop Spindle Chiller",
            "pdfUrl": "/manuals/05_Cooling_Spindle/064  KRA150A83369_06_048657_122101316.pdf",
            "pages": 234,
            "category": "Cooling System",
            "highlights": "Closed-loop spindle chiller. Diagnoses collective fault 700502, low fluid level switch LE/AQ, high-pressure switch PA trip, condenser fin cleaning, and VGB-R 455 P coolant charging."
        },
        {
            "id": "man-filtration",
            "title": "Knoll KF 200/1800 Compact Filter System Instructions",
            "model": "KF 200 Filter Fleece & Sludge Tank System",
            "pdfUrl": "/manuals/09_Cooling_Lubricant/12000063   110/2/11033782_75 515 401986_KF 200.pdf",
            "pages": 78,
            "category": "Coolant & Lubrication",
            "highlights": "Filter fleece advance mechanism and soil tank sludge management. Guides resolution of 701338 KF filter flooded, filter paper advance jam, float switch 2S1 cleaning, and chip conveyor overload."
        },
        {
            "id": "man-hydraulic",
            "title": "Bavius HBZ CC Hydraulic Schematic & Component Manual",
            "model": "HS-002-K617-2-AC02 Central Hydraulic System",
            "pdfUrl": "/manuals/07_Hydraulic/HS-002-K617-2-AC02.pdf",
            "pages": 64,
            "category": "Hydraulics",
            "highlights": "Hydraulic pressure regulator 120 bar line clamping, pallet changer lock/unlock cylinders, counter-balance accumulator charging, and proportional valve testing."
        },
        {
            "id": "man-vibration",
            "title": "SiViB Record 31 Spindle Vibration & Bearing Monitor",
            "model": "SiViB Record 31 Accelerometer FFT Sensor",
            "pdfUrl": "/manuals/14_Spindle_Control/SiViB_Record_31_Manual en.pdf",
            "pages": 53,
            "category": "Spindle Diagnostics",
            "highlights": "Spindle nose accelerometer FFT vibration monitoring. Configures warning limit 700730 and alarm limit 700731, toolholder dynamic unbalance (ISO 1940 G2.5), and bearing defect frequency tracking (BPFO/BPFI)."
        },
        {
            "id": "man-vacuum",
            "title": "VOC-AD-S-63/100 Vacuum Clamping Station Instructions",
            "model": "VOC Vakuumanlage AD S 63_100 Aerostructure Clamping",
            "pdfUrl": "/manuals/13_Vacuum/VOC Vakuumanlage AD S 63_100 en.PDF",
            "pages": 42,
            "category": "Workholding",
            "highlights": "Monitors safe machining vacuum threshold at -600 mbar via pressure switch 1Z2. Outlines liquid feedback drainage (valve 2V2), silicone sealing gasket inspection, and vacuum pump oil servicing."
        },
        {
            "id": "man-operating",
            "title": "Bavius HBZ Compact Cell Operating Instructions",
            "model": "HBZ CC 200/100 5-Axis Horizontal High-Speed Machining",
            "pdfUrl": "/manuals/00_Operating_Instructions/Operating instructions en.pdf",
            "pages": 298,
            "category": "Machine General",
            "highlights": "Full OEM PLC alarm registry (700100 - 701350). Step-by-step procedures for pallet changer recovery (Section 4.8), pneumatic service unit maintenance (Section 2.3), and Safety Integrated test stop."
        },
        {
            "id": "man-suction",
            "title": "AFS Air Filtration & Mist Suction System",
            "model": "AFS 1.07 Industrial Oil Mist Collector",
            "pdfUrl": "/manuals/10_Suction/AFS_1.07_EN_US__Instruction_Manual.pdf",
            "pages": 38,
            "category": "Air Filtration",
            "highlights": "Enclosure negative pressure monitoring, HEPA filter differential pressure gauge, and automatic aerosol drainage."
        },
        {
            "id": "man-probe",
            "title": "Renishaw RMI-Q Radio Machine Probe Installation Guide",
            "model": "RMI-Q / RMP60 Multi-Probe Radio Transmission",
            "pdfUrl": "/manuals/11_Radio_Probe/RMI-Q_Installation_guide.pdf",
            "pages": 46,
            "category": "Probing & Inspection",
            "highlights": "Radio transmission signal strength, channel pairing, battery status indicators, and kinematic stylus alignment."
        },
        {
            "id": "man-drive",
            "title": "HBZ Compact Cell Drive Diagram & Kinematics",
            "model": "Antriebsschema HBZ CC 200/100 Dual Gantry",
            "pdfUrl": "/manuals/02_Drive_Diagramm/Antriebsschema_HBZ_CC_200_100.pdf",
            "pages": 18,
            "category": "Motion Drives",
            "highlights": "Tandem gantry kinematics (X11/X12), ballscrew pitch compensation, rotary axis C11 torque motor, and A11 swivel trunnion."
        },
        {
            "id": "man-tool",
            "title": "Tool Changer & Pneumatic Control Unit Operating Manual",
            "model": "Operating Instructions 146598 Automatic Tool Magazine",
            "pdfUrl": "/manuals/12_Tool_Control/Operating instructions 146598 rev0-2_0-2 de en.pdf",
            "pages": 52,
            "category": "Tool Changer",
            "highlights": "Tool changer arm indexing, shutter door pneumatic cylinders, inductive proximity switch B47 alignment, and tool clamp verification."
        }
    ]

    # Exactly 1 Consolidated Ticket Per Machine with Red Parameters (8 Machines)
    active_breakdowns = [
        {
            "id": "BD-2026-0922-01",
            "machineId": "bavius-01",
            "machineName": "Bavius 4mtr N01-02",
            "plantId": "TSAL",
            "alarmCode": "700810 / 700731 / 700145",
            "alarmTag": "BAVIUS_4MTR_CONSOLIDATED_RED",
            "message": "Consolidated Multi-Alarm: Spindle Motor Temp (61.4°C), Nose Vibration (4.85 mm/s) & Tool Pull-In Force (14.2 kN)",
            "severity": "Critical",
            "redCount": 3,
            "redParameters": [
                {"name": "Spindle Motor Stator Temperature (PTC)", "value": "61.4 °C", "limit": "≥ 60.0 °C (Trip)", "tag": "BAVIUS_4MTR_SP1_MOTOR_TEMP"},
                {"name": "Spindle Nose Vibration FFT RMS", "value": "4.85 mm/s", "limit": "≥ 4.5 mm/s (Alarm)", "tag": "BAVIUS_4MTR_VIB_SP1_FRONT"},
                {"name": "Tool Clamping Pull-in Force", "value": "14.2 kN", "limit": "< 15.0 kN (Trip)", "tag": "BAVIUS_4MTR_TOOL_CLAMP_FORCE"}
            ],
            "sparesRequired": "Rittal Chiller G4 Air Filter Mat (P/N: SK 3182.100), Hybrid Ceramic Spindle Bearing Set (P/N: HC-7014-C-P4S), Belleville Disc Spring Stack 18 kN (P/N: Bavius 146598-BSS), HSK-A63 Clamping Collet Set (P/N: 95.600.034)",
            "activeSince": "2026-10-05 12:28:52",
            "durationSeconds": 8042,
            "status": "BREAKDOWN",
            "sapTicketId": "SAP-PM-2026-94812",
            "sapStatus": "DISPATCHED_TO_MECHANICAL",
            "remedy": "1. Controlled spindle stop.\n2. Clean KRA150 chiller filter mat FAC and condenser fins.\n3. Measure PTC resistance (< 3000 Ω across pins 3-4).\n4. Inspect Belleville disc spring stack with Ott-Jakob POWER-CHECK pull-in force gauge (target min 18 kN).\n5. Inspect hybrid ceramic spindle bearings per Fischer Manual Ch. 7.2.",
            "manualCitation": "Fischer MFW-1920 HSC Spindle Manual Ch. 7.2 & Rittal KRA150 Manual Ch. 4.3 & Tool Control Manual 146598",
            "policy": "1 Ticket Per Asset Policy Active: All 3 red parameters consolidated into single work order. New alarms inhibited until ticket closure or 10-day SLA window (Active: 2h 14m)."
        },
        {
            "id": "BD-2026-1005-02",
            "machineId": "modig-03c",
            "machineName": "Modig HHV3 C",
            "plantId": "TSAL",
            "alarmCode": "700121 / 700216 / 700340",
            "alarmTag": "MODIG_CONSOLIDATED_RED",
            "message": "Consolidated Multi-Alarm: Compressed Air Pressure Drop (< 5.2 bar) & Linear Scale Purge Fault",
            "severity": "High",
            "redCount": 4,
            "redParameters": [
                {"name": "Compressed Air Supply Pressure", "value": "5.1 bar", "limit": "< 5.5 bar (Alarm)", "tag": "MODIG_AIR_SUPPLY_P"},
                {"name": "X-Axis Linear Optical Scale Purge", "value": "0.8 bar", "limit": "< 1.2 bar (Alarm)", "tag": "MODIG_X_SCALE_PURGE"},
                {"name": "Extrusion Feed Thrust Resistance", "value": "38.2 kN", "limit": "> 35.0 kN (Alarm)", "tag": "MODIG_EXTR_THRUST"},
                {"name": "Spindle Synchronous Drive Lag", "value": "14.8 ms", "limit": "> 12.0 ms (Alarm)", "tag": "MODIG_SYNC_LAG"}
            ],
            "sparesRequired": "FESTO MS6-LFM Microfilter Cartridge (P/N: 532789), Polyurethane 12mm Pneumatic Tube (P/N: PUN-H-12x2-BL), Festo QS Quick Coupling (P/N: QS-12-8), Heidenhain Scanning Unit Optical Seal Kit",
            "activeSince": "2026-10-05 09:58:00",
            "durationSeconds": 17104,
            "status": "BREAKDOWN",
            "sapTicketId": "SAP-PM-2026-94808",
            "sapStatus": "UNDER_INVESTIGATION",
            "remedy": "Inspect pneumatic distribution manifold in energy drag chain. Replace cracked 12mm polyurethane air line. Clean optical scale purge filter bowl.",
            "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3 (Pneumatic Supply & Service Unit), Page 116",
            "policy": "1 Ticket Per Asset Policy Active: All 4 red parameters consolidated into single work order. New alarms inhibited for 10 days."
        }
    ]

    open_reports = [
        {
            "ticketId": "SAP-PM-2026-94812",
            "equipment": "Bavius 4mtr N01-02 (TSAL)",
            "machineId": "bavius-01",
            "reportDate": "05.10.2026 12:28",
            "fault": "Consolidated Multi-Alarm: Spindle Motor Temp High (61.4°C), Spindle Vibration (4.85 mm/s) & Tool Pull-In Force (14.2 kN)",
            "redCount": 3,
            "redParameters": [
                {"name": "Spindle Motor Stator Temperature (PTC)", "value": "61.4 °C", "limit": "≥ 60.0 °C (Trip)"},
                {"name": "Spindle Nose Vibration FFT RMS", "value": "4.85 mm/s", "limit": "≥ 4.5 mm/s (Alarm)"},
                {"name": "Tool Clamping Pull-in Force", "value": "14.2 kN", "limit": "< 15.0 kN (Trip)"}
            ],
            "sparesRequired": "Rittal Chiller Filter Mat G4 (P/N: SK 3182.100), Hybrid Ceramic Spindle Bearing Set (P/N: HC-7014-C-P4S), Belleville Disc Spring Stack (P/N: Bavius 146598-BSS), HSK-A63 Clamping Collet (P/N: 95.600.034)",
            "recommendation": "1. Controlled spindle stop.\n2. Clean KRA150 chiller filter mat and condenser fins.\n3. Measure PTC resistance (< 3000 Ω across pins 3-4).\n4. Inspect Belleville spring stack with Ott-Jakob POWER-CHECK pull-in force gauge.\n5. Inspect hybrid ceramic spindle bearings per Fischer Manual Ch. 7.2.",
            "policy": "1 Ticket Per Asset Policy Active: All 3 red parameters consolidated into single work order. New alarms inhibited until ticket closure or 10-day SLA window (Active: 2h 14m).",
            "status": "DISPATCHED TO MECHANICAL"
        },
        {
            "ticketId": "SAP-PM-2026-94808",
            "equipment": "Modig HHV3 C (TSAL)",
            "machineId": "modig-03c",
            "reportDate": "05.10.2026 09:58",
            "fault": "Consolidated Multi-Alarm: Compressed Air Pressure Low (< 5.2 bar) & Scale Purge Warning",
            "redCount": 4,
            "redParameters": [
                {"name": "Compressed Air Supply Pressure", "value": "5.1 bar", "limit": "< 5.5 bar"},
                {"name": "X-Axis Linear Optical Scale Purge", "value": "0.8 bar", "limit": "< 1.2 bar"},
                {"name": "Extrusion Feed Thrust Resistance", "value": "38.2 kN", "limit": "> 35.0 kN"},
                {"name": "Spindle Synchronous Drive Lag", "value": "14.8 ms", "limit": "> 12.0 ms"}
            ],
            "sparesRequired": "FESTO MS6-LFM Microfilter Cartridge (P/N: 532789), Polyurethane 12mm Pneumatic Tube (P/N: PUN-H-12x2-BL), Festo QS Quick Coupling (P/N: QS-12-8)",
            "recommendation": "Inspect pneumatic distribution manifold in drag chain. Replace cracked 12mm polyurethane air line. Clean optical scale purge filter bowl.",
            "policy": "1 Ticket Per Asset Policy Active: 4 red parameters consolidated. Re-raise inhibited for 10 days.",
            "status": "UNDER INVESTIGATION"
        },
        {
            "ticketId": "SAP-PM-2026-94799",
            "equipment": "Breton K60 5-Axis (TSAL)",
            "machineId": "breton-k60",
            "reportDate": "04.10.2026 21:15",
            "fault": "Consolidated Multi-Alarm: Z-Axis Hydrostatic Oil Pressure & Electrospindle Vibration",
            "redCount": 2,
            "redParameters": [
                {"name": "Hydrostatic Rail Pocket Pressure", "value": "38.5 bar", "limit": "< 45.0 bar"},
                {"name": "60k RPM Electrospindle Casing Vibration", "value": "5.10 mm/s", "limit": "> 4.20 mm/s"}
            ],
            "sparesRequired": "Hydac 10µm High-Pressure Filter Element (P/N: 0160 D 010 BN4HC), Hydrostatic Pocket Proportional Spool Valve (P/N: 4WE6D6X), Electrospindle Dynamic Balancing Kit",
            "recommendation": "Replace 10µm return filter element on HP pack, flush return manifolds for micro-debris, dynamic trim balance spindle rotor.",
            "policy": "1 Ticket Per Asset Policy Active: 2 red parameters consolidated. Re-raise inhibited for 10 days.",
            "status": "AWAITING SPARES"
        },
        {
            "ticketId": "SAP-PM-2026-94792",
            "equipment": "Bavius HBZ AeroCell 500 (TSAL)",
            "machineId": "bavius-aerocell",
            "reportDate": "04.10.2026 18:30",
            "fault": "Consolidated Multi-Alarm: Pallet Changer Swing Cylinder Drift & Vacuum Zone 2 Leak",
            "redCount": 2,
            "redParameters": [
                {"name": "Pallet Changer Swing Cylinder Timing", "value": "4.8 s", "limit": "> 3.5 s"},
                {"name": "Vacuum Clamping Zone 2 Pressure", "value": "-480 mbar", "limit": "≥ -500 mbar"}
            ],
            "sparesRequired": "VOC-AD-S EPDM Foam Perimeter Seal (P/N: VOC-SEAL-8M), Turck Inductive Proximity Sensor M12 (P/N: Bi2-M12-AP6X), Hydraulic Swing Cylinder Seal Pack",
            "recommendation": "Re-align inductive proximity switch B47, replace damaged vacuum table perimeter lip seal, and test clamping hold at -600 mbar.",
            "policy": "1 Ticket Per Asset Policy Active: 2 red parameters consolidated. Re-raise inhibited for 10 days.",
            "status": "SCHEDULED MAINTENANCE"
        },
        {
            "ticketId": "SAP-PM-2026-94785",
            "equipment": "Makino T1 5-Axis (TSAL)",
            "machineId": "makino-t1",
            "reportDate": "04.10.2026 16:40",
            "fault": "Consolidated Multi-Alarm: High-Torque Gear Spindle Oil Recirculation Low",
            "redCount": 1,
            "redParameters": [
                {"name": "Spindle Gearbox Lubrication Flow", "value": "1.8 L/min", "limit": "< 2.5 L/min"}
            ],
            "sparesRequired": "Vogel Gear Pump Cartridge (P/N: KFB-01-200), High-Viscosity Oil Filter Element 25µm (P/N: MF-25-HV), Flow Switch Contact Block",
            "recommendation": "Inspect gear oil suction strainer for brass particulate, test pump discharge relief valve, top up ISO VG 68 synthetic gear oil.",
            "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
            "status": "IN PROGRESS"
        },
        {
            "ticketId": "SAP-PM-2026-94776",
            "equipment": "Starrag Heckert HEC 800 (TSAL)",
            "machineId": "starrag-hec800",
            "reportDate": "03.10.2026 08:30",
            "fault": "Consolidated Multi-Alarm: High-Pressure Coolant Through-Spindle Filter Differential Pressure Trip",
            "redCount": 1,
            "redParameters": [
                {"name": "CTS Coolant Delivery Differential Pressure", "value": "4.8 bar", "limit": "> 4.0 bar"}
            ],
            "sparesRequired": "Knoll CTS High-Pressure Duplex Filter Element 25µm (P/N: 700501-CTS), Rotary Union Ceramic Mechanical Seal (P/N: Deublin 1117-000)",
            "recommendation": "Index duplex filter valve to chamber B, replace clogged 25µm stainless steel mesh insert, flush Deublin rotary coolant union.",
            "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
            "status": "UNDER INVESTIGATION"
        },
        {
            "ticketId": "SAP-PM-2026-94768",
            "equipment": "Makino MAG3 5-Axis (TSAL)",
            "machineId": "makino-mag3",
            "reportDate": "02.10.2026 14:10",
            "fault": "Consolidated Multi-Alarm: B-Axis Direct Drive Torque Motor Stator Over-Temperature",
            "redCount": 1,
            "redParameters": [
                {"name": "B-Axis Torque Motor Stator Temp", "value": "64.2 °C", "limit": "> 60.0 °C"}
            ],
            "sparesRequired": "Parker Torque Motor Cooling Manifold O-Ring Set (P/N: OR-TM-60), Glycol Cooling Circulation Pump Impeller, KTY84 Temperature Sensor",
            "recommendation": "Bleed air pocket from B-axis stator water jacket cooling circuit, check chiller auxiliary delivery valve, verify thermal limit trip.",
            "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
            "status": "DISPATCHED TO PNEUMATICS"
        },
        {
            "ticketId": "SAP-PM-2026-94755",
            "equipment": "Okuma MU-8000V (TSAL)",
            "machineId": "okuma-mu8000",
            "reportDate": "01.10.2026 11:20",
            "fault": "Consolidated Multi-Alarm: Laser Cladding Head Chiller Flow Restriction",
            "redCount": 1,
            "redParameters": [
                {"name": "Laser Optics Deionized Chiller Flow", "value": "2.2 L/min", "limit": "< 3.0 L/min"}
            ],
            "sparesRequired": "DI Resin Deionizing Filter Cartridge (P/N: DI-OPT-100), Particle Filter 5µm (P/N: P-5-SS), Coolant Flow Turbine Sensor",
            "recommendation": "Replace deionizer cartridge, clean inline particle strainer, measure coolant conductivity (< 5 µS/cm).",
            "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
            "status": "SCHEDULED MAINTENANCE"
        }
    ]

    closed_historical_templates = [
        ("Pallet Clamping Proportional Valve 1V3 Sticking", "Replaced directional valve spool & flushed 10µm filter element", 14.5),
        ("KRA150 Chiller Air Filter Mat FAC Clogged", "Replaced G4 washable filter mat and cleaned condenser fins", 12.0),
        ("Tool Changer Shutter Door Cylinder B47 Misaligned", "Realigned inductive proximity sensor B47 and tightened mounting clamp", 8.5),
        ("Linear Scale Sealing Air Purge Drop (Alarm 700216)", "Replaced SMC sub-micron coalesce filter cartridge & reset regulator to 1.5 bar", 9.5),
        ("Spindle Front Bearing Temperature Warning (> 48°C)", "Performed graduated warm-up and checked oil-air lubrication dosing cycle", 16.0),
        ("Vacuum Clamping Pressure Drop (-550 mbar warning)", "Replaced worn perimeter closed-cell silicone foam seal and cleaned vacuum port", 6.5),
        ("Knoll KF 200 Filter Fleece Roll Depleted", "Loaded fresh 100m filtration paper roll and cleared float switch 2S1 debris", 4.0),
        ("Axis Y11 Way Lube Pressure Switch Timeout", "Bleed trapped air from progressive distributor manifold Block A", 11.0),
        ("Hydraulic Return Filter Differential Pressure High", "Replaced 6-micron glass-fiber element and inspected return oil sample", 7.5),
        ("AFS Mist Collector High Differential Pressure", "Serviced primary impinger cartridge and cleaned oil return siphon trap", 5.5),
        ("Main Spindle Ott-Jakob Pull-In Force Degradation", "Replaced 4 fatigued Belleville spring washers and verified 18.2 kN clamping", 18.5),
        ("Central Coolant Tank Level Switch Low Alarm", "Topped up 7% emulsion coolant tank and recalibrated refractometer ratio", 3.5),
        ("Rotary Table C-Axis Encoder Optical Fogging", "Cleaned Heidenhain angle encoder scanning head with optic solvent", 13.0),
        ("Chip Conveyor Scraper Belt Jam (Torque Overload)", "Cleared jammed titanium stringer scrap chips at conveyor discharge chute", 6.0),
        ("Spindle Recooler Flow Switch 700501 Intermittent", "Cleaned impellor paddle flow sensor and de-scaled recooler heat exchanger", 15.0),
        ("Safety Integrated Door Interlock Switch B88 Fault", "Replaced Pilz magnetic safety interlock sensor and tested dual-channel relay", 5.0)
    ]

    closed_machines = [
        "Bavius 4mtr N01-02 (TSAL)", "Fanuc Robodrill α-D21LiB5 (TSAL)", "Breton K60 5-Axis (TSAL)",
        "Breton K80 Heavy Gantry (TSAL)", "Makino T1 5-Axis (TSAL)", "Modig HHV3 C (TSAL)",
        "Makino MAG3 5-Axis (TSAL)", "DMG MORI DMU 80 P (TSAL)", "Starrag Heckert HEC 800 (TSAL)",
        "Hermle C 42 U MT (TSAL)", "Mazak Variaxis i-800 NEO (TSAL)", "GROB G550 5-Axis (TSAL)",
        "Okuma MU-8000V (TSAL)", "Haas UMC-1000 5-Axis (TSAL)", "Heller HF 5500 (TSAL)",
        "Chiron FZ 15W High-Speed (TSAL)"
    ]

    closed_reports = []
    base_date = datetime.date(2026, 10, 1)

    for i in range(48):
        tmpl = closed_historical_templates[i % len(closed_historical_templates)]
        m_name = closed_machines[i % len(closed_machines)]
        days_ago = (i * 3) + 2
        det_date = base_date - datetime.timedelta(days=days_ago)
        close_date = det_date + datetime.timedelta(hours=int(tmpl[2]))
        ticket_num = 94750 - (i * 7)
        saved_hours = round(tmpl[2] * 0.85 + (i % 5) * 1.2, 1)

        closed_reports.append({
            "ticketId": f"SAP-PM-2026-{ticket_num}",
            "equipment": m_name,
            "diagnosis": tmpl[0],
            "detectionDate": det_date.strftime("%d.%m.%Y") + f" {8 + (i % 10):02d}:15",
            "closureDate": close_date.strftime("%d.%m.%Y") + f" {14 + (i % 8):02d}:45",
            "downtimeSaved": f"{saved_hours} hrs",
            "status": "CLOSED / VERIFIED"
        })

    # Compliance Score: Closed Tickets / Total Tickets Raised
    total_tickets = len(open_reports) + len(closed_reports)
    closed_count = len(closed_reports)
    compliance_score = {
        "closed": closed_count,
        "open": len(open_reports),
        "total": total_tickets,
        "percentage": round((closed_count / total_tickets) * 100, 1),
        "target": 85.0
    }

    # Customized PM Checklist Data extracted directly from User's SAP Screenshots
    pm_checklist = {
        "equipmentId": "11000452",
        "equipmentName": "Bavius 4mtr N01-02",
        "tasklistGroup": "12240",
        "plant": "1041",
        "workCenter": "N01_PEM",
        "controlKey": "PM01",
        "lastAiEvaluationDate": "2026-10-05",
        "nextScheduledAiReview": "2027-04-05",
        "aiReviewCycle": "6 Months (Continuous Breakdown Learning)",
        "summary": {
            "totalBaselineOps": 77,
            "frequencyEscalatedOps": 5,
            "newConditionOpsAdded": 4,
            "estimatedDowntimeAvoidanceHrs": "142.5 hrs/yr"
        },
        "operations": [
            # Monthly PM (GrpCounter 1) - Key Operations
            {"act": "0010", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Coolant leakage-Pumps,Pipe&Rotary Unit", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0020", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Damage of wiper-LM guide&ball screw", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0030", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Condition of chip conveyor gearbox chain", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0040", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Main Control Cabinet checking", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0050", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Clean filter& Ystrainer-coolant line", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0060", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check clogging of Coolant nozzle holes", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0070", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Condition of chain link of conveyor", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0080", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check Abnormal noise APC-Pallet changing", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0090", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Condition of through coolant filter", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0100", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check tightning of conveyor chain", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0110", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check condition of Radiator(oil cooler)", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0120", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check grease on LM guide&ballscrew", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0130", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check any abnormal noise from conveyor", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0140", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check damage of telescopic guard&wiper", "status": "Standard", "aiAction": "Keep Monthly"},
            # New Condition Task 1
            {"act": "0145", "grp": "1", "freq": "Monthly (NEW)", "work": 0.3, "unit": "HR", "desc": "Ott-Jakob POWER-CHECK Tool Pull-in Force Clamping Verification (Target: 18 kN, Alarm < 15 kN)", "status": "AI_ADDED", "aiAction": "NEW CONDITION MONITORING TASK", "justification": "Correlated with 12 Tool Clamping Loss Breakdowns (38.6 hrs downtime). Missing from baseline monthly PM."},
            {"act": "0150", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Neutral to Earth & L to Neutral voltage", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0160", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check abnormal noise&vibration from axis", "status": "Standard", "aiAction": "Keep Monthly"},
            # New Condition Task 2
            {"act": "0165", "grp": "1", "freq": "Bi-Weekly (NEW)", "work": 0.3, "unit": "HR", "desc": "SiViB Record 31 Accelerometer Spindle Nose FFT RMS Vibration Spectral Baseline (< 3.0 mm/s)", "status": "AI_ADDED", "aiAction": "NEW CONDITION MONITORING TASK", "justification": "Correlated with 14 Spindle Bearing Dynamic Runout Breakdowns (46.2 hrs downtime). Prevents catastrophic ceramic bearing seizure."},
            {"act": "0170", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Clean line filter of Vacuum system", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0180", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Carbon brush of volt. stabilizer", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0190", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check spindle Lubricaton mist working", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0200", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check spindle lubrication line leakage", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0210", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Clean Prefilter of Vacuum system", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0220", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check Operator door&working", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0380", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Clean chiller Condenser coil", "status": "AI_ESCALATED", "aiAction": "Escalate to Weekly", "justification": "Correlated with 17 Spindle Over-Temp Breakdowns (85.33 hrs downtime). Monthly cleaning interval inadequate for continuous aluminum milling."},
            {"act": "0420", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Clean Chiller unit filter", "status": "AI_ESCALATED", "aiAction": "Escalate to Weekly", "justification": "KRA150 G4 filter mat saturation leads directly to thermal saturation trips within 18 days of high-velocity milling."},
            # New Condition Task 3
            {"act": "0385", "grp": "1", "freq": "Monthly (NEW)", "work": 0.2, "unit": "HR", "desc": "Measure KRA150 Chiller Recooler Flow Rate & Glycol 30% Concentration Refractometer Ratio", "status": "AI_ADDED", "aiAction": "NEW CONDITION MONITORING TASK", "justification": "Flow monitor switch 700501 intermittent trip occurred 6 times in historical log."},
            {"act": "0360", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "Check any leakage from Air line", "status": "Standard", "aiAction": "Keep Monthly"},
            {"act": "0500", "grp": "1", "freq": "Monthly", "work": 0.2, "unit": "HR", "desc": "cln all air line filter", "status": "AI_ESCALATED", "aiAction": "Escalate to Bi-Weekly", "justification": "13 Compressed Air Supply loss incidents caused by microfilter element differential pressure loading."},
            # New Condition Task 4
            {"act": "0525", "grp": "1", "freq": "Monthly (NEW)", "work": 0.2, "unit": "HR", "desc": "VOC-AD-S Vacuum Workholding Differential Leak Rate & Seal Lip Integrity Check (-600 mbar)", "status": "AI_ADDED", "aiAction": "NEW CONDITION MONITORING TASK", "justification": "Prevents catastrophic aerodynamic bulkhead workpiece shifting during high-speed roughing."},
            # Quarterly PM (GrpCounter 2)
            {"act": "0010", "grp": "2", "freq": "Quarterly", "work": 0.2, "unit": "HR", "desc": "Coupling bolt-ballscrew&servomotor", "status": "Standard", "aiAction": "Keep Quarterly"},
            {"act": "0040", "grp": "2", "freq": "Quarterly", "work": 0.2, "unit": "HR", "desc": "Check Spindle lubrication oil condition", "status": "Standard", "aiAction": "Keep Quarterly"},
            {"act": "0070", "grp": "2", "freq": "Quarterly", "work": 0.2, "unit": "HR", "desc": "Check condition of chiller oil", "status": "Standard", "aiAction": "Keep Quarterly"},
            {"act": "0120", "grp": "2", "freq": "Quarterly", "work": 0.2, "unit": "HR", "desc": "Cleaning of spindle cone", "status": "Standard", "aiAction": "Keep Quarterly"},
            {"act": "0140", "grp": "2", "freq": "Quarterly", "work": 0.2, "unit": "HR", "desc": "chK cover o ring of sp connector(RCCA)", "status": "Standard", "aiAction": "Keep Quarterly"},
            # Half-Yearly (GrpCounter 3)
            {"act": "0010", "grp": "3", "freq": "Half Yearly", "work": 0.2, "unit": "HR", "desc": "Check condition of Hydraulic oil", "status": "Standard", "aiAction": "Keep Half-Yearly"},
            # Yearly (GrpCounter 4)
            {"act": "0010", "grp": "4", "freq": "Yearly", "work": 0.2, "unit": "HR", "desc": "Check return line filter of hydr.syst", "status": "AI_ESCALATED", "aiAction": "Escalate to Quarterly", "justification": "Yearly frequency allowed return filter DP to exceed 2.1 bar, triggering servo cylinder stick-slip."},
            {"act": "0030", "grp": "4", "freq": "Yearly", "work": 0.2, "unit": "HR", "desc": "Clean spindle chiller tank", "status": "AI_ESCALATED", "aiAction": "Escalate to Half-Yearly", "justification": "Biofilm and algae accumulation in chiller reservoir reduced heat exchanger efficiency after 7 months."}
        ]
    }

    # Clean parameters
    from generate_clean_params import get_bavius_parameters
    raw_params = get_bavius_parameters()

    # Read events from existing data.js and add downtime tracking
    current_data_path = os.path.join(DASHBOARD_DIR, 'data.js')
    content = ""
    if os.path.exists(current_data_path):
        with open(current_data_path, 'r', encoding='utf-8') as f:
            content = f.read()

    event_stream_match = re.search(r'window\.EVENT_LOG_STREAM\s*=\s*(\[.*?\]);\s*window\.BAVIUS_ALERTS_DATA', content, re.DOTALL)
    telemetry_match = re.search(r'window\.DASHBOARD_TELEMETRY\s*=\s*(\{.*?\});', content, re.DOTALL)

    raw_events = json.loads(event_stream_match.group(1)) if event_stream_match else []
    raw_telemetry = json.loads(telemetry_match.group(1)) if telemetry_match else {}

    # Enrich events with downtime tracking seconds and formatted duration
    for idx, ev in enumerate(raw_events):
        d_hrs = float(ev.get('downtime', 0.5))
        d_secs = int(d_hrs * 3600)
        ev['downtimeSeconds'] = d_secs
        h = d_secs // 3600
        m = (d_secs % 3600) // 60
        s = d_secs % 60
        ev['downtimeDurationStr'] = f"{h:02d}h {m:02d}m {s:02d}s"
        # Spares for event remedy
        if 'sparesRequired' not in ev:
            ev['sparesRequired'] = "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"

    # Write out data.js
    with open(current_data_path, 'w', encoding='utf-8') as f:
        f.write("// Auto-generated TASL PEM AI Reliability Engineer Data Engine\n")
        f.write("window.TASL_PLANTS = " + json.dumps(plants, indent=2) + ";\n")
        f.write("window.TASL_MACHINES = " + json.dumps(machines, indent=2) + ";\n")
        f.write("window.TOP_BREAKDOWN_CAUSES = " + json.dumps(top_causes, indent=2) + ";\n")
        f.write("window.OEM_MANUALS_DATA = " + json.dumps(oem_manuals, indent=2) + ";\n")
        f.write("window.BAVIUS_PARAMETERS = " + json.dumps(raw_params, indent=2) + ";\n")
        f.write("window.ACTIVE_BREAKDOWNS = " + json.dumps(active_breakdowns, indent=2) + ";\n")
        f.write("window.EVENT_LOG_STREAM = " + json.dumps(raw_events, indent=2) + ";\n")
        f.write("window.BAVIUS_ALERTS_DATA = " + json.dumps(enriched_alerts, indent=2) + ";\n")
        f.write("window.DASHBOARD_TELEMETRY = " + json.dumps(raw_telemetry, indent=2) + ";\n")
        f.write("window.OPEN_REPORTS_DATA = " + json.dumps(open_reports, indent=2) + ";\n")
        f.write("window.CLOSED_REPORTS_DATA = " + json.dumps(closed_reports, indent=2) + ";\n")
        f.write("window.COMPLIANCE_SCORE = " + json.dumps(compliance_score, indent=2) + ";\n")
        f.write("window.PM_CHECKLIST_DATA = " + json.dumps(pm_checklist, indent=2) + ";\n")

    print(f"Successfully generated complete data.js with Compliance Score: {compliance_score['percentage']}% and PM Checklist operations: {len(pm_checklist['operations'])}!")

if __name__ == '__main__':
    main()
