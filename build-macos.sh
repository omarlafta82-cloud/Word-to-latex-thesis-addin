#!/bin/bash
# UTM Thesis Converter - macOS Build Script

echo ""
echo "======================================="
echo "UTM Thesis Converter - macOS Builder"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "[1/5] Checking Node.js version..."
node --version
echo ""

echo "[2/5] Installing dependencies (this may take a few minutes)..."
cd desktop
if [ -d "node_modules" ]; then
    echo "Dependencies already installed, skipping..."
else
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies!"
        exit 1
    fi
fi
echo ""

echo "[3/5] Building React application..."
npm run react-build
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to build React app!"
    exit 1
fi
echo ""

echo "[4/5] Creating macOS installer (.dmg)..."
echo "This may take several minutes..."
npx electron-builder --mac
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to build installer!"
    exit 1
fi
echo ""

echo "[5/5] Build complete!"
echo ""
echo "======================================="
echo "SUCCESS! Your .dmg file is ready!"
echo "======================================="
echo ""
echo "Location: desktop/dist/"
echo ""
echo "Files created:"
echo "  - UTM-Thesis-Converter.dmg (Disk image)"
echo "  - UTM-Thesis-Converter.zip (Archive)"
echo ""
echo "You can now:"
echo "1. Double-click the .dmg to mount"
echo "2. Drag app to Applications folder"
echo "3. Share with others"
echo ""
