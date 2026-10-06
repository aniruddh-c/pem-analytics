# TASL AERO-SENSE — Condition Based Monitoring & Predictive Breakdown Engine

An enterprise-grade **Predictive Engineering & Maintenance (PEM)** analytics platform and multi-plant control room dashboard developed for **Tata Advanced Systems Limited (TASL)**.

---

## 📁 Repository Organization

```
pem-analytics/
├── dashboard/                  # Production Web Application
│   ├── index.html              # Multi-Plant Control Room Portal (Home, CBM & PM, Breakdown Monitoring)
│   ├── styles.css              # Industrial Cyber UI design system (Dark & Light modes)
│   ├── app.js                  # Client state, dynamic TTB rate engine, fleet managers & split-screen viewer
│   ├── data.js                 # Complete dataset (Plants, 62 Bavius signals, SAP tickets, 100 OEM alerts)
│   └── tasl-logo.jpg           # Official TASL company logo
│
├── analytics/                  # Predictive Analytics Engine & Datasets
│   ├── build_data_engine.py    # Generates enriched alerts and complete data.js telemetry engine
│   ├── generate_alerts_engine.py# Correlates 250k telemetry points with 100 breakdowns
│   ├── bavius_breakdown_alerts.csv # Validated 100-breakdown predictive table (Excel/ERP ready)
│   └── bavius_breakdown_alerts.json# Full machine-readable alert database with OEM SOPs
│
├── bavius-hbz-cc/              # Official OEM Operation & Maintenance Technical Manuals (PDFs)
│   ├── 00_Operating_Instructions/  # Bavarian HBZ CC PLC Alarm Codes & Instructions
│   ├── 04_Spindle/                 # Fischer MFW-1920/30/1 Spindle Manual (123 Pages)
│   ├── 05_Cooling_Spindle/         # Rittal KRA150 Chiller / Recooler Manual (234 Pages)
│   ├── 07_Hydraulic/               # Central Hydraulic System & Schematics (64 Pages)
│   ├── 09_Cooling_Lubricant/       # Knoll KF 200/1800 Compact Filter System (78 Pages)
│   ├── 10_Suction/                 # AFS 1.07 Air Filtration & Mist Collector
│   ├── 11_Radio_Probe/             # Renishaw RMI-Q Radio Machine Probe Installation Guide
│   ├── 12_Tool_Control/            # Automatic Tool Changer & Pneumatic Control Unit
│   ├── 13_Vacuum/                  # VOC-AD-S-63/100 Vacuum Clamping Station (42 Pages)
│   └── 14_Spindle_Control/         # SiViB Record 31 Spindle Vibration Accelerometer Manual
│
├── bavius-data.csv             # 250,571 continuous operational sensor readings (March - Sept 2026)
├── bavius-breakdown.xlsx       # Shop-floor historical maintenance log (100 breakdown incidents)
├── run_dashboard.py            # HTTP server with dynamic OEM manual PDF streaming
├── run_analytics.py            # Runner for predictive analytics engine
├── start_dashboard.bat         # 1-click Windows batch launcher (runs headless via pythonw, terminal auto-closes)
├── stop_dashboard.bat          # 1-click script to terminate background server
├── tasl-logo.jpg               # Official Tata Advanced Systems Limited logo
└── README.md                   # System documentation
```

---

## 🚀 How to Run

### 1. Launch the Control Room Dashboard
Double-click `start_dashboard.bat` (or run `python run_dashboard.py`).
- **Headless Launch:** The command prompt window will automatically close, and your default web browser will open straight to the dashboard.
- URL: 👉 **[http://localhost:8080](http://localhost:8080)**

To stop the server at any time, run `stop_dashboard.bat`.

### 2. Recompile / Update Analytics Engine
To re-run the correlation between operational telemetry and the breakdown logs:
```powershell
python analytics/build_data_engine.py
```
This updates `analytics/bavius_breakdown_alerts.csv`, `analytics/bavius_breakdown_alerts.json`, and `dashboard/data.js`.

---

## 🖥️ Dashboard Architecture & Key Modules

### 1. Home Screen (Plant Overview)
- Minimalist hero title: **Plant Overview** with **Total Machines Connected: 79**.
- Consolidated plant cards: `TSAL` (32 machines), `TASL-NGP` (24), `TCOE` (15), `TASL-BLR` (8), `TASL-XXX` (0, future expansion).
- High visual contrast with multi-layer shadows and top cyan accent border.
- **5 Square Status Badges** fitting 100% inside the card without cut-off:
  1. 🟢 **Running**
  2. 🟡 **Idle**
  3. 🔴 **Alarm**
  4. 🔵 **Shut Down**
  5. 🟣 **Breakdown**
- Clicking any plant card navigates directly to that plant's CBM & PM dashboard.

### 2. Folder-Style Plant Tabs Bar
- Inspired by `tabs-example.jpg`.
- Features an electric blue connecting line right below the tabs that seamlessly links into the active plant tab.

### 3. CBM & PM Dashboard
- **Action KPI Cards:** `Total Faults Identified` (55), `Open Reports` (7 active SAP tickets), `Closed Reports` (48 resolved tickets, 412.5 hrs saved). Clicking opens corresponding SAP report tables.
- **Secondary Sub-Nav Bar:** `Health Matrix`, `Breakdown Alert Engine`, `Open Reports`, `Closed Reports`, `OEM Manuals Library` with counter badges.
- **Machine Cards:**
  - Machine name and health smiley: `😊` when health &ge; 70%, `😟` when health < 70%.
  - 2 Parameter Zone boxes: **Green Box** (count of all parameters < 90%) and **Red Box** (count of all parameters > 90%). (Yellow parameters merged into green for shop-floor clarity).
  - `(i)` button opens asset metadata modal (OEM, Model, Plant Location, Current Status, Active State Duration, Monitored Subsystem Profile).
- **Dedicated Machine Parameters Page:**
  - **Section 1: Precursor Risk & Anomaly Analysis:** Comprehensive analysis of Red (Critical, >90% limit, continuous red &ge;30m with auto SAP ticket) and Yellow (Medium, 70-90% monitored precursor) parameters with risky trend, probable root cause, manual solution, and historical frequency.
  - **Section 2: Grouped Sensor Parameters:**
    - Cards tinted subtly green, yellow, or red.
    - Friendly name and live value on left; mini 24-hr sparkline curve on right.
    - **Edge-to-Edge Risk Meter:** 0-70% green, 70-90% yellow, >90% red with scale markings and slider needle indicating current position.
    - Clicking any parameter opens a center expanded modal with full 24-hr time chart (00:00 - Now), Y-axis markings, risk meter, and anomaly details.
- **Predictive Breakdown Alert Engine Table:**
  - Columns: Timestamp, Machine, Subsystem & Breakdown Type, Past Incidents, Severity, Probable Reason & Trend Precursor, Suggested Fix (numbered format: 1. ..., 2. ...), and Time to Breakdown (TTB).
  - Dynamic TTB adjustment based on rate of change in live telemetry.
  - Column header filter arrows for Severity (Critical default) and Subsystem (All default).
- **OEM Manuals Library (Split-Screen Viewer):**
  - Left: 11 OEM manuals.
  - Right: Embedded PDF viewer opening technical documentation and schematics inside the browser side-by-side.

### 4. Breakdown Monitoring Dashboard
- **Header:** Breakdown Monitoring with OPC Online and SAP Integration Active status.
- **Top Row (Split View):**
  - **Left Half:** Active Critical Breakdowns (with live 1-second timers and 30-second SAP rule) and Events Logged Today.
  - **Right Half:** **Top 5 Breakdown Causes (Last 6 months)** showing top historical failure modes, downtime, frequency, and Root Cause Corrective Actions according to OEM manuals.
- **AI Remedy Guide Modal:** Includes exact source manual name, chapter, and page number, plus a dedicated section for **Historical Incident Precedents & Previous Actions**.
- **Event Log Stream (Last 50 Signals):** Multiple alarm codes stacked vertically in rows and centered.
