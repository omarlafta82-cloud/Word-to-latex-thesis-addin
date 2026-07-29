@echo off
REM UTM Thesis Converter - Windows Build Script
REM This script builds the .exe installer automatically

echo.
echo ========================================
echo UTM Thesis Converter - Windows Builder
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo After installation, restart this script.
    pause
    exit /b 1
)

echo [1/5] Checking Node.js version...
node --version
echo.

echo [2/5] Installing dependencies (this may take a few minutes)...
cd desktop
if exist node_modules (
    echo Dependencies already installed, skipping...
) else (
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
)
echo.

echo [3/5] Building React application...
call npm run react-build
if errorlevel 1 (
    echo ERROR: Failed to build React app!
    pause
    exit /b 1
)
echo.

echo [4/5] Creating Windows installer (.exe)...
echo This may take several minutes...
call npx electron-builder --win
if errorlevel 1 (
    echo ERROR: Failed to build installer!
    pause
    exit /b 1
)
echo.

echo [5/5] Build complete!
echo.
echo ========================================
echo SUCCESS! Your .exe files are ready!
echo ========================================
echo.
echo Location: desktop\dist\
echo.
echo Files created:
echo   - UTM-Thesis-Converter-Setup.exe (Full installer)
echo   - UTM-Thesis-Converter portable.exe (Portable version)
echo.
echo You can now:
echo 1. Double-click the .exe to install
echo 2. Share the .exe with others
echo 3. Copy to USB drive
echo.
pause
