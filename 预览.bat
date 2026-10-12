@echo off
cd /d %~dp0
echo ==========================================
echo  Starting local preview ...
echo ==========================================
start "preview-server" cmd /c "npm run dev"
echo  Waiting for the server to start (about 10s) ...
timeout /t 10 /nobreak >nul
start http://localhost:3000
echo.
echo  Preview opened in your browser.
echo  To STOP preview: close the black window
echo  named "preview-server", then close this one.
echo.
pause
