# BUILD INSTRUCTIONS - UTM Thesis Converter

## 🚀 Quick Start - Build .exe in 3 Steps

### **Step 1: Download Node.js**
- Go to: https://nodejs.org/
- Download **LTS version** (recommended)
- Install it
- **Restart your computer**

### **Step 2: Clone Repository**
```bash
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin
```

### **Step 3: Run Build Script**

**For Windows:**
```bash
build-windows.bat
```

**For macOS:**
```bash
chmod +x build-macos.sh
./build-macos.sh
```

**For Linux:**
```bash
chmod +x build-linux.sh
./build-linux.sh
```

---

## ⏱️ Expected Time

- First time: **15-20 minutes** (includes downloads)
- Subsequent builds: **5-10 minutes**

---

## 📁 Output Location

After build completes, find your files in:
```
desktop/dist/
```

### Windows Output
- ✅ `UTM-Thesis-Converter-Setup.exe` - Full installer
- ✅ `UTM-Thesis-Converter portable.exe` - Portable version

### macOS Output
- ✅ `UTM-Thesis-Converter.dmg` - Disk image
- ✅ `UTM-Thesis-Converter.zip` - Archive

### Linux Output
- ✅ `utm-thesis-converter.AppImage` - AppImage
- ✅ `utm-thesis-converter.deb` - Debian package

---

## 🔧 Manual Build (Without Script)

If scripts don't work, do it manually:

```bash
# 1. Navigate to desktop folder
cd desktop

# 2. Install packages
npm install

# 3. Build for your platform
npm run build-win    # Windows
npm run build-mac    # macOS
npm run build-linux  # Linux
```

---

## ✅ Verify Node.js Installation

```bash
node --version
npm --version
```

Should show version numbers (e.g., v18.0.0)

---

## 🆘 Troubleshooting

### "Node is not recognized"
- Restart Command Prompt/Terminal
- Or restart computer
- Check Node.js was installed correctly

### "Build fails with disk space error"
- Free up at least 1GB disk space
- Delete `node_modules` folder
- Try building again

### "npm install takes too long"
- Normal for first time
- Connection speed affects download time
- Wait patiently

### "Port 3000 already in use"
- Close other applications
- Or change port in electron.js

---

## 📦 What Gets Built

The build process:
1. ✅ Compiles React code to optimized version
2. ✅ Bundles all dependencies
3. ✅ Creates native executable for your OS
4. ✅ Generates installer
5. ✅ Packages into distributable format

**Result:** Professional, one-click installable application!

---

## 🎯 After Building

### To Install on Your Computer
1. Go to `desktop/dist/`
2. Double-click the installer
3. Follow prompts
4. Done! App appears in your menu

### To Share with Others
1. Copy the .exe/.dmg/.AppImage file
2. Send via email or USB
3. They can install on their computer
4. Requires no additional downloads

### To Create Multiple Versions
```bash
# One command builds all platforms
npm run build  # from desktop folder

# Or individual
npm run build-win
npm run build-mac
npm run build-linux
```

---

## 📚 More Information

- Full GUI guide: `docs/DESKTOP_APP_GUIDE.md`
- Installation guide: `DESKTOP_INSTALLATION.md`
- Development guide: `docs/DESKTOP_DEVELOPMENT.md`

---

**Ready to build? Follow the 3 steps above! 🚀**
