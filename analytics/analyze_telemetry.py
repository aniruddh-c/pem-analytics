import pandas as pd
import numpy as np

# Load breakdown data
df_bk = pd.read_excel('bavius-breakdown.xlsx').dropna(how='all')
df_bk['dt_malf'] = pd.to_datetime(df_bk['Malf.Start'] + ' ' + df_bk['MalfStrt'], format='%d.%m.%Y %H:%M:%S', errors='coerce')

# Read chunk 0 (all March to September historical telemetry)
df_ops = pd.read_csv('bavius-data.csv', nrows=50000)
clean_cols = [c for c in df_ops.columns if not (c.endswith('.1') or c.endswith('.2'))]
df_ops = df_ops[clean_cols]
df_ops['dt'] = pd.to_datetime(df_ops['Timestamp'].str[:19])
df_ops = df_ops.sort_values('dt').reset_index(drop=True)

print('Operational data range:', df_ops['dt'].min(), 'to', df_ops['dt'].max())

results = []
for idx, row in df_bk.iterrows():
    t = row['dt_malf']
    desc = str(row['Description'])
    downtime = row['Downtime']
    if pd.isnull(t):
        continue
    # Window 2 hours prior to breakdown
    pre_window = df_ops[(df_ops['dt'] >= t - pd.Timedelta(hours=2)) & (df_ops['dt'] < t)]
    post_window = df_ops[(df_ops['dt'] >= t) & (df_ops['dt'] <= t + pd.Timedelta(hours=2))]
    
    fault_pre = (pre_window['BAVIUS_4_MTR_FAULT'] > 0).sum() if len(pre_window) > 0 else 0
    fault_post = (post_window['BAVIUS_4_MTR_FAULT'] > 0).sum() if len(post_window) > 0 else 0
    sp1_temp_max = pre_window['BAVIUS_4MTR_SP1_MOTOR_TEMP'].max() if len(pre_window) > 0 else np.nan
    c11_temp_max = pre_window['BAVIUS_4MTR_C11_MOTOR_TEMP'].max() if len(pre_window) > 0 else np.nan
    drive_load_max = pre_window['BAVIUS_4MTR_driveLoad'].max() if len(pre_window) > 0 else np.nan
    sp_speed_max = pre_window['BAVIUS_4MTR_SPINDLE_actSpeed'].max() if len(pre_window) > 0 else np.nan
    sp_load_max = pre_window['BAVIUS_4MTR_aaLoad_SP1'].max() if len(pre_window) > 0 else np.nan
    c11_load_max = pre_window['BAVIUS_4MTR_aaLoad_C11'].max() if len(pre_window) > 0 else np.nan
    y11_torque_max = pre_window['BAVIUS_4MTR_vaTorque_Y11'].abs().max() if len(pre_window) > 0 else np.nan
    
    results.append({
        'Index': idx,
        'Timestamp': str(t),
        'Description': desc,
        'Downtime': downtime,
        'Samples_Pre': len(pre_window),
        'Fault_Pre': fault_pre,
        'Fault_Post': fault_post,
        'SP1_Temp_Max': sp1_temp_max,
        'C11_Temp_Max': c11_temp_max,
        'Drive_Load_Max': drive_load_max,
        'SP_Speed_Max': sp_speed_max,
        'SP_Load_Max': sp_load_max,
        'C11_Load_Max': c11_load_max,
        'Y11_Torque_Max': y11_torque_max
    })

df_res = pd.DataFrame(results)
print('Total breakdowns analyzed against telemetry:', len(df_res))
pd.set_option('display.max_columns', 15)
pd.set_option('display.width', 1200)
print(df_res.head(30).to_string())
