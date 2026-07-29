#!/bin/bash
# UTM Thesis Converter - Linux Build Script

echo ""
echo "======================================="
echo "UTM Thesis Converter - Linux Builder"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js using:"
    echo "  sudo apt-get install nodejs npm"
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

echo "[4/5] Creating Linux packages..."
echo "This may take several minutes..."
npx electron-builder --linux
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to build packages!"
    exit 1
fi
echo ""

echo "[5/5] Build complete!"
echo ""
echo "======================================="
echo "SUCCESS! Your Linux packages are ready!"
echo "======================================="
echo ""
echo "Location: desktop/dist/"
echo ""
echo "Files created:"
echo "  - utm-thesis-converter.AppImage (AppImage)"
echo "  - utm-thesis-converter.deb (Debian package)"
echo ""
echo "You can now:"
echo "1. Run: ./utm-thesis-converter.AppImage"
echo "2. Install: sudo dpkg -i utm-thesis-converter.deb"
echo "3. Share with others"
echo ""
