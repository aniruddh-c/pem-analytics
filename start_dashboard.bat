@echo off
cd /d "%~dp0"

rem Stop any lingering process on port 8080
powershell -NoProfile -Command "$p = (Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue).OwningProcess; if ($p) { Stop-Process -Id $p -Force }" >nul 2>&1
powershell -NoProfile -Command "Start-Sleep -Milliseconds 300"

rem Launch pythonw in the background (no visible terminal window)
powershell -NoProfile -Command "Start-Process pythonw -ArgumentList 'run_dashboard.py' -WorkingDirectory '%~dp0'"
powershell -NoProfile -Command "Start-Sleep -Seconds 1"

rem Open dashboard in default browser
start http://localhost:8080
exit
