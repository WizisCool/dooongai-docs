@echo off
setlocal enabledelayedexpansion

set ROOT=%~dp0..
set RELEASE_DIR=%ROOT%\release

for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set DATE_PART=%%a-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME_PART=%%a-%%b
set TIME_PART=%TIME_PART: =0%
set ARCHIVE_NAME=dooongai-docs-static-%DATE_PART%-%TIME_PART%.zip

echo [1/4] Installing dependencies...
call npm install || goto :error

echo [2/4] Building local static site...
call npm run build:local || goto :error

if not exist "%RELEASE_DIR%" mkdir "%RELEASE_DIR%"

echo [3/4] Packing build directory...
powershell -NoProfile -Command "Compress-Archive -Path '%ROOT%\build\*' -DestinationPath '%RELEASE_DIR%\%ARCHIVE_NAME%' -Force" || goto :error

echo [4/4] Done.
echo Output: %RELEASE_DIR%\%ARCHIVE_NAME%
exit /b 0

:error
echo Packaging failed.
exit /b 1
