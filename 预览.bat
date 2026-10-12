@echo off
chcp 65001 >nul
cd /d %~dp0
echo 启动本地预览，浏览器会自动打开网站
echo 改完文件保存后网页会自动刷新
echo 看完后关闭这个黑窗口即可
timeout /t 3 >nul
start http://localhost:3000
npm run dev
