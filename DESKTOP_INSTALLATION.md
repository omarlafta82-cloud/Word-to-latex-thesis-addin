# Installation Guide - Desktop Application

## 🖥️ System Requirements

### Windows
- Windows 7 or newer
- 200MB disk space
- No additional software needed

### macOS
- macOS 10.13 or newer
- 200MB disk space
- No additional software needed

### Linux
- Ubuntu 16.04 or newer (or equivalent)
- 200MB disk space
- libgtk-3-0 library (usually pre-installed)

---

## 📥 Installation Methods

### Method 1: Download Installer (Recommended)

**Windows:**
1. Download `UTM-Thesis-Converter-Setup.exe`
2. Double-click the installer
3. Follow installation wizard
4. Choose installation location
5. Click "Install"
6. Done! App appears in Start Menu

**macOS:**
1. Download `UTM-Thesis-Converter.dmg`
2. Double-click to open
3. Drag app to Applications folder
4. Open from Applications (or Spotlight)
5. If prompted, click "Open" to trust the app
6. Done!

**Linux (AppImage):**
1. Download `utm-thesis-converter.AppImage`
2. Make executable:
   ```bash
   chmod +x utm-thesis-converter.AppImage
   ```
3. Run:
   ```bash
   ./utm-thesis-converter.AppImage
   ```

**Linux (Debian/Ubuntu):**
1. Download `utm-thesis-converter.deb`
2. Install:
   ```bash
   sudo dpkg -i utm-thesis-converter.deb
   ```
3. Run from app menu or terminal:
   ```bash
   utm-thesis-converter
   ```

### Method 2: Build from Source

**Prerequisites:**
- Node.js 16+ (download from nodejs.org)
- Git (download from git-scm.com)

**Steps:**

1. **Clone Repository**
   ```bash
   git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
   cd word-to-latex-thesis-addin/desktop
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Find Installer**
   - Windows: `dist/UTM-Thesis-Converter-Setup.exe`
   - macOS: `dist/UTM-Thesis-Converter.dmg`
   - Linux: `dist/utm-thesis-converter.AppImage` or `dist/utm-thesis-converter.deb`

### Method 3: Install CLI Only

```bash
# Using npm
npm install -g utm-thesis-converter-cli

# From source
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin/desktop
npm install
npm link
```

---

## ✅ Verify Installation

**GUI App:**
- Open application from menu
- Should show file upload screen

**CLI Tool:**
```bash
utm-converter --version
utm-converter --help
```

Should display version and help information.

---

## 🔄 Uninstallation

**Windows:**
1. Go to Settings → Apps → Apps & features
2. Find "UTM Thesis Converter"
3. Click → Uninstall
4. Follow prompts

**macOS:**
1. Open Applications folder
2. Drag "UTM Thesis Converter" to Trash
3. Empty Trash

**Linux (AppImage):**
- Simply delete the .AppImage file

**Linux (Debian):**
```bash
sudo apt remove utm-thesis-converter
```

---

## 🔄 Updates

The application automatically checks for updates on startup.

**To manually check:**
1. Open application
2. Go to Settings
3. Look for "Check for Updates"
4. Or it will notify when update available

---

## 🆘 Troubleshooting

### Application Won't Install

**Windows:**
- Try running as Administrator
- Disable antivirus temporarily
- Check disk space (need 200MB+)
- Restart computer

**macOS:**
- Right-click app → Open
- Check System Preferences → Security
- Allow app to run

**Linux:**
- Check file permissions
- Ensure libgtk-3-0 installed
- Try: `sudo apt-get install libgtk-3-0`

### Application Crashes on Startup

1. Reinstall the application
2. Check system requirements
3. Update graphics drivers
4. Report issue with error message

### CLI Command Not Found

**Windows:**
- Restart Command Prompt
- Check npm installation

**Mac/Linux:**
```bash
# Check if installed
which utm-converter

# If not found, reinstall
npm install -g utm-thesis-converter-cli

# Or use full path
node /path/to/utm-converter
```

---

## 🚀 Getting Started

After installation:

1. **Open Application**
   - Double-click desktop icon
   - Or find in application menu

2. **Create Your First Conversion**
   - Upload a Word document
   - Fill in thesis information
   - Click Convert
   - Download .tex file

3. **Use with LaTeX**
   - Get UTM template files
   - Place .tex file in template folder
   - Open in Overleaf or local editor
   - Compile to PDF

---

## 📞 Need Help?

- **GitHub Issues:** https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin/issues
- **Documentation:** See `docs/` folder in repository
- **Video Tutorials:** Coming soon!

---

**Installation complete! Ready to start converting! 🎉**
