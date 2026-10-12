@echo off
cd /d %~dp0
echo ==========================================
echo  Publishing to miaodh1998.github.io ...
echo ==========================================
git add -A
git commit -m "update"
git push
echo.
echo  Done! The site updates in 1-2 minutes:
echo  https://miaodh1998.github.io/
echo.
pause
