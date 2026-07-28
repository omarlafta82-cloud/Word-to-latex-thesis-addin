# Desktop Application - Development Guide

## 🛠️ Building and Packaging

### Setup Development Environment

**Prerequisites:**
- Node.js 16+ (https://nodejs.org/)
- Git (https://git-scm.com/)
- Python 3 (for some build tools)
- Visual C++ Build Tools (Windows)
- Xcode (macOS)

### Initial Setup

```bash
# Clone repository
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin/desktop

# Install dependencies
npm install

# Install global tools
npm install -g electron-builder
```

---

## 🚀 Development Workflow

### Run in Development Mode

```bash
# This starts both React dev server and Electron
npm run dev

# Or run them separately
# Terminal 1:
npm run react-start

# Terminal 2:
npm run electron-dev
```

### Build GUI Application

```bash
# Build for current platform
npm run build

# Build for specific platform
npm run build-win    # Windows
npm run build-mac    # macOS
npm run build-linux  # Linux
```

Outputs will be in `dist/` folder.

### Test CLI Tool

```bash
# Test CLI commands
node src/cli/index.js --help
node src/cli/index.js convert --interactive
node src/cli/index.js batch --help
```

---

## 📁 Project Structure

```
desktop/
├── public/
│   ├── electron.js           # Electron main process
│   ├── preload.js           # Security bridge
│   └── favicon.ico
├── src/
│   ├── DesktopApp.tsx       # Main React component
│   ├── index.tsx            # React entry point
│   ├── components/
│   │   ├── FileUploader.tsx
│   │   ├── MetadataForm.tsx
│   │   ├── LaTeXPreview.tsx
│   │   └── Settings.tsx
│   ├── cli/
│   │   └── index.js         # CLI entry point
│   ├── converters/
│   │   ├── docxConverter.js # Main conversion logic
│   │   └── LaTeXConverter.js
│   ├── templates/
│   │   └── UTMTemplateGenerator.js
│   └── styles/
│       ├── DesktopApp.css
│       ├── FileUploader.css
│       ├── MetadataForm.css
│       ├── LaTeXPreview.css
│       └── Settings.css
├── dist/                    # Built/packaged files
├── package.json
└── README.md
```

---

## 🔧 Configuration Files

### package.json - Build Configuration

```json
"build": {
  "appId": "com.utm-thesis-converter.app",
  "productName": "UTM Thesis Converter",
  "win": {
    "target": ["nsis", "portable"]
  },
  "mac": {
    "target": ["dmg", "zip"]
  },
  "linux": {
    "target": ["AppImage", "deb"]
  }
}
```

### electron.js - Main Process Configuration

```javascript
// Window settings
const mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  minWidth: 800,
  minHeight: 600,
  // ... security settings
});
```

---

## 📦 Packaging & Distribution

### Windows Distribution

```bash
# Build Windows installer
npm run build-win

# Output:
# dist/UTM-Thesis-Converter-Setup.exe      # Installer
# dist/UTM-Thesis-Converter portable.exe   # Portable
```

**Configuration in package.json:**
```json
"win": {
  "target": [
    {"target": "nsis", "arch": ["x64", "ia32"]},
    "portable"
  ]
},
"nsis": {
  "oneClick": false,
  "allowToChangeInstallationDirectory": true,
  "createDesktopShortcut": true
}
```

### macOS Distribution

```bash
# Build macOS
npm run build-mac

# Output:
# dist/UTM-Thesis-Converter.dmg     # Disk image
# dist/UTM-Thesis-Converter.zip     # Zip archive
```

**Code Signing (Optional):**
```bash
# Export certificate
# Update electron-builder with certificateFile
```

### Linux Distribution

```bash
# Build Linux
npm run build-linux

# Output:
# dist/utm-thesis-converter.AppImage    # AppImage
# dist/utm-thesis-converter.deb         # Debian package
```

---

## 🧪 Testing

### Unit Tests

```bash
# Run tests
npm test

# Create test files in src/__tests__/
```

Example test structure:
```javascript
// src/converters/__tests__/LaTeXConverter.test.js
const LaTeXConverter = require('../LaTeXConverter');

describe('LaTeXConverter', () => {
  test('escapes special characters', () => {
    const converter = new LaTeXConverter();
    expect(converter.escapeLatex('$test')).toBe('\\$test');
  });
});
```

### Manual Testing

1. **GUI Testing:**
   - File upload
   - Form validation
   - Conversion process
   - Download functionality
   - Settings

2. **CLI Testing:**
   ```bash
   node src/cli/index.js convert -i test.docx -o test.tex
   node src/cli/index.js batch -i ./test-files -o ./output
   ```

---

## 🔐 Security Considerations

### IPC Security

```javascript
// preload.js - Safe bridge
contextBridge.exposeInMainWorld('electron', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  // Only expose needed functions
});
```

### File Operations

```javascript
// electron.js - Validate paths
ipcMain.handle('save-file', async (event, filePath, content) => {
  // Validate filePath
  // Use fs.promises for async
  // Handle errors gracefully
});
```

---

## 🚀 Release Process

### 1. Update Version
```json
// package.json
"version": "1.1.0"
```

### 2. Build All Platforms
```bash
npm run build      # All platforms
# or individual:
npm run build-win && npm run build-mac && npm run build-linux
```

### 3. Create Release Notes
```markdown
# v1.1.0

## Features
- Added batch conversion
- Improved UI

## Fixes
- Fixed file dialog on Linux
- Better error handling
```

### 4. Upload to GitHub Releases
```bash
# Create tag
git tag v1.1.0
git push origin v1.1.0

# Upload files from dist/
```

---

## 📊 Performance Optimization

### Code Splitting
```javascript
// src/DesktopApp.tsx
const Settings = lazy(() => import('./components/Settings'));
```

### Bundle Analysis
```bash
npm install --save-dev webpack-bundle-analyzer
```

### Electron Optimization
- Code signing
- Asset compression
- Lazy loading
- Memory management

---

## 🐛 Debugging

### DevTools in Development
```javascript
// electron.js
if (isDev) {
  mainWindow.webContents.openDevTools();
}
```

### Debugging CLI
```bash
node --inspect-brk src/cli/index.js convert -i test.docx
```

### Logs
```javascript
// Save logs to file
const log = require('electron-log');
log.transports.file.level = 'debug';
```

---

## 📚 Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [Electron Builder Docs](https://www.electron.build/)
- [React Documentation](https://react.dev)
- [Node.js Documentation](https://nodejs.org/docs/)

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Create Pull Request

---

**Happy developing! 🚀**
