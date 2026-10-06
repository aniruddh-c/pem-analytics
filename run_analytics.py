#!/usr/bin/env python3
"""
TASL PEM Analytics - Breakdown Analytics & Alert Engine Runner
Executes the analytical engine to process telemetry, breakdown logs, and OEM manuals,
generating updated `bavius_breakdown_alerts.csv` and `bavius_breakdown_alerts.json`.
"""

import os
import sys
import subprocess

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    analytics_script = os.path.join(root_dir, 'analytics', 'generate_alerts_engine.py')

    if not os.path.exists(analytics_script):
        # Fallback to local script if present
        analytics_script = os.path.join(root_dir, 'generate_alerts_engine.py')

    print("=" * 70)
    print("  TASL PEM ANALYTICS - BREAKDOWN ENGINE RUNNER")
    print("  Correlating 250,571 Telemetry Readings with 100 Breakdown Incidents")
    print("=" * 70)
    print(f"Executing: {analytics_script}")
    print("-" * 70)

    try:
        res = subprocess.run([sys.executable, analytics_script], cwd=root_dir, check=True)
        print("=" * 70)
        print("  Analytics Engine executed successfully!")
        print("  Outputs updated:")
        print(f"   - CSV:  {os.path.join(root_dir, 'analytics', 'bavius_breakdown_alerts.csv')}")
        print(f"   - JSON: {os.path.join(root_dir, 'analytics', 'bavius_breakdown_alerts.json')}")
        print("=" * 70)
    except subprocess.CalledProcessError as e:
        print(f"Error executing analytics engine: {e}")
        sys.exit(e.returncode)

if __name__ == '__main__':
    main()
