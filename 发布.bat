@echo off
chcp 65001 >nul
cd /d %~dp0
echo 正在发布更新到 miaodh1998.github.io ...
git add -A
git commit -m "update"
git push
echo.
echo 完成！约 1-2 分钟后 https://miaodh1998.github.io/ 自动更新
pause
