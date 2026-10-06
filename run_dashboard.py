#!/usr/bin/env python3
"""
TASL AERO-SENSE - Industrial Control Room Server
Serves the web dashboard from `dashboard/` and OEM technical manuals from `bavius-hbz-cc/`.
"""

import http.server
import socketserver
import os
import sys
import time
import urllib.parse
import webbrowser

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DASHBOARD_DIR = os.path.join(BASE_DIR, 'dashboard')
MANUALS_DIR = os.path.join(BASE_DIR, 'bavius-hbz-cc')

LOG_FILE = os.path.join(BASE_DIR, 'server.log')

# Ensure stdout and stderr are valid and logged even when running headless via pythonw
if sys.stdout is None or sys.stderr is None:
    try:
        _log_fh = open(LOG_FILE, 'a', encoding='utf-8')
        if sys.stdout is None:
            sys.stdout = _log_fh
        if sys.stderr is None:
            sys.stderr = _log_fh
    except Exception:
        pass


class AeroSenseHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Decode URL path
        path = urllib.parse.unquote(path.split('?', 1)[0].split('#', 1)[0])
        
        # Route /manuals/ to bavius-hbz-cc/
        if path.startswith('/manuals/'):
            subpath = path[len('/manuals/'):].lstrip('/')
            return os.path.join(MANUALS_DIR, subpath)
            
        if path.startswith('/bavius-hbz-cc/'):
            subpath = path[len('/bavius-hbz-cc/'):].lstrip('/')
            return os.path.join(MANUALS_DIR, subpath)

        # Route /tasl-logo.jpg to root or dashboard
        if path == '/tasl-logo.jpg':
            root_logo = os.path.join(BASE_DIR, 'tasl-logo.jpg')
            if os.path.exists(root_logo):
                return root_logo
            return os.path.join(DASHBOARD_DIR, 'tasl-logo.jpg')

        # Default: serve from dashboard directory
        subpath = path.lstrip('/')
        if not subpath or subpath == '/':
            return os.path.join(DASHBOARD_DIR, 'index.html')
        return os.path.join(DASHBOARD_DIR, subpath)

    def end_headers(self):
        # Enable caching and CORS for local preview
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Concise logging safe for console and pythonw
        try:
            if sys.stderr:
                sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")
        except Exception:
            pass


def free_port(port):
    """Release port if held by a previous lingering process on Windows."""
    if sys.platform == 'win32':
        import subprocess
        try:
            cmd = f'powershell -NoProfile -Command "(Get-NetTCPConnection -LocalPort {port} -State Listen -ErrorAction SilentlyContinue).OwningProcess | ForEach-Object {{ Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }}"'
            subprocess.run(cmd, shell=True, timeout=5, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            time.sleep(0.5)
        except Exception:
            pass


def main():
    try:
        print("=" * 70)
        print("  TASL AERO-SENSE - INDUSTRIAL CONTROL ROOM DASHBOARD")
        print("  Condition Based Monitoring & Predictive Engineering Engine")
        print("=" * 70)
        print(f"Dashboard Directory: {DASHBOARD_DIR}")
        print(f"Manuals Directory:   {MANUALS_DIR}")
        print(f"Server URL:          http://localhost:{PORT}")
        print("-" * 70)
    except Exception:
        pass

    socketserver.ThreadingTCPServer.allow_reuse_address = True
    socketserver.ThreadingTCPServer.daemon_threads = True

    try:
        with socketserver.ThreadingTCPServer(("", PORT), AeroSenseHandler) as httpd:
            try:
                webbrowser.open(f"http://localhost:{PORT}")
            except Exception:
                pass
            httpd.serve_forever()
    except OSError as e:
        # Port might be busy; try releasing once
        try:
            free_port(PORT)
            with socketserver.ThreadingTCPServer(("", PORT), AeroSenseHandler) as httpd:
                try:
                    webbrowser.open(f"http://localhost:{PORT}")
                except Exception:
                    pass
                httpd.serve_forever()
        except Exception as ex:
            try:
                print(f"\nError starting server on port {PORT}: {ex}")
            except Exception:
                pass
            sys.exit(1)
    except KeyboardInterrupt:
        try:
            print("\nStopping TASL AeroSense server. Goodbye!")
        except Exception:
            pass
        sys.exit(0)
    except Exception as e:
        try:
            print(f"\nError starting server: {e}")
        except Exception:
            pass
        sys.exit(1)


if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        import traceback
        try:
            with open(LOG_FILE, 'a', encoding='utf-8') as f:
                f.write(traceback.format_exc())
        except Exception:
            pass
