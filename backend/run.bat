@echo off
echo Starting full project: Backend + Frontend
start cmd /k "cd /d C:\Users\VICTUS\Downloads\DOCKER\Shubbham-Moblie-shop\backend && npm start"
start cmd /k "cd /d C:\Users\VICTUS\Downloads\DOCKER\Shubbham-Moblie-shop\frontend && npm run dev"
echo Both servers started successfully!
pause
