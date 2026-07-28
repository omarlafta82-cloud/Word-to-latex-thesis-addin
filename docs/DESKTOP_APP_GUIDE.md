# UTM Thesis to LaTeX Converter - Desktop Application

## 🎉 Complete Standalone Application

Your thesis converter is now available as a professional desktop application!

### 📦 What You Get

**Both GUI and CLI:**
- ✅ **GUI Application** - Beautiful desktop interface (Windows, Mac, Linux)
- ✅ **CLI Tool** - Command-line interface for developers
- ✅ **Batch Processing** - Convert multiple files at once
- ✅ **No Dependencies** - Works offline, no Word/Office needed
- ✅ **Professional Installers** - One-click installation

---

## 🚀 Quick Start

### Windows Users
1. Download `UTM-Thesis-Converter-Setup.exe`
2. Double-click to install
3. Click "UTM Thesis Converter" from Start Menu
4. Start converting!

### Mac Users
1. Download `UTM-Thesis-Converter.dmg`
2. Drag app to Applications folder
3. Open from Applications
4. Start converting!

### Linux Users
1. Download `utm-thesis-converter.AppImage`
2. Make executable: `chmod +x utm-thesis-converter.AppImage`
3. Run: `./utm-thesis-converter.AppImage`
4. Or install: `sudo dpkg -i utm-thesis-converter.deb`

---

## 🖥️ GUI Application

### Features
- 📁 Drag-and-drop file upload
- 📝 Fill thesis metadata
- 👁️ Live LaTeX preview
- 💾 Download .tex file
- 📋 Copy to clipboard
- ⚙️ Settings panel
- 🌓 Dark/Light theme
- ⏱️ Conversion history

### How to Use

1. **Open the Application**
   - Click icon on desktop or app menu

2. **Upload Word Document**
   - Drag and drop your .docx file
   - Or click to browse

3. **Fill Thesis Information**
   - Title
   - Author name
   - Graduation year
   - Degree type (PhD, Masters, Bachelor)
   - Faculty
   - Supervisor
   - Co-supervisor (optional)

4. **Convert**
   - Click "Convert to LaTeX"
   - Wait for conversion (5-10 seconds)

5. **Download or Copy**
   - Click "Download .tex File" to save
   - Or "Copy to Clipboard" to paste elsewhere

6. **Use with LaTeX Template**
   - Get UTM template files
   - Open .tex file in Overleaf or local editor
   - Compile to PDF

---

## ⌨️ CLI Tool

### Installation

**Option 1: Using NPM**
```bash
npm install -g utm-thesis-converter-cli
```

**Option 2: From Source**
```bash
cd desktop
npm install
npm link
```

### Usage

#### Basic Conversion
```bash
utm-converter convert -i thesis.docx -o thesis.tex \
  -t "My Thesis" \
  -a "John Doe" \
  -s "Dr. Smith" \
  -y 2024
```

#### Interactive Mode
```bash
utm-converter convert --interactive
```
You'll be prompted for all information.

#### Batch Conversion
```bash
utm-converter batch \
  -i ./word-documents \
  -o ./latex-output \
  --recursive
```
Converts all .docx files in directory.

#### Validate Document
```bash
utm-converter validate -i thesis.docx
```

### CLI Options

```
convert       Convert Word document to LaTeX
  -i, --input       Input Word file path
  -o, --output      Output LaTeX file path
  -t, --title       Thesis title
  -a, --author      Author name
  -s, --supervisor  Supervisor name
  -y, --year        Graduation year
  -d, --degree      Degree type (phd, masters, bachelor)
  -u, --university  University template (utm)
  --interactive     Interactive mode (prompts for input)
  -v, --verbose     Verbose output

batch         Batch convert directory
  -i, --input-dir   Input directory with Word files
  -o, --output-dir  Output directory for LaTeX files
  -r, --recursive   Process subdirectories

validate      Validate Word document
  -i, --input       Input Word file path
```

### CLI Examples

**Convert single file with all options:**
```bash
utm-converter convert \
  -i "My Thesis.docx" \
  -o "thesis.tex" \
  -t "Machine Learning Applications" \
  -a "Ahmad Ibrahim" \
  -s "Dr. John Smith" \
  -y 2024 \
  -d phd
```

**Interactive conversion:**
```bash
utm-converter convert --interactive
# Will prompt for all information
```

**Batch convert a folder:**
```bash
utm-converter batch \
  -i ./student-theses \
  -o ./latex-files \
  --recursive
```

**Validate before converting:**
```bash
utm-converter validate -i thesis.docx && \
utm-converter convert -i thesis.docx -o thesis.tex
```

---

## 📥 Installation from Source

### Prerequisites
- Node.js 16+ installed
- Git installed

### Steps

1. **Clone Repository**
```bash
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin/desktop
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run in Development**
```bash
# GUI
npm run dev

# CLI
npm run cli convert --interactive
```

4. **Build Installers**
```bash
# All platforms
npm run build

# Windows only
npm run build-win

# macOS only
npm run build-mac

# Linux only
npm run build-linux
```

Installers will be in `desktop/dist/` folder.

---

## 🔧 Development

### Project Structure
```
desktop/
├── public/
│   ├── electron.js          # Electron main process
│   └── preload.js          # Security bridge
├── src/
│   ├── DesktopApp.tsx      # Main React component
│   ├── components/          # React components
│   │   ├── FileUploader.tsx
│   │   ├── MetadataForm.tsx
│   │   ├── LaTeXPreview.tsx
│   │   └── Settings.tsx
│   ├── cli/
│   │   └── index.js        # CLI tool
│   ├── converters/          # Conversion logic
│   │   ├── docxConverter.js
│   │   └── LaTeXConverter.js
│   ├── templates/           # LaTeX templates
│   │   └── UTMTemplateGenerator.js
│   └── styles/              # CSS files
├── package.json
└── README.md
```

### Running in Development

**GUI Development:**
```bash
npm run dev
```
Will open Electron window with hot-reload.

**CLI Development:**
```bash
node src/cli/index.js convert --help
```

---

## 📊 Features Comparison

| Feature | Word Add-in | Desktop App |
|---------|------------|-------------|
| **Installation** | Via Office Store | Standalone installer |
| **Requires Word** | Yes | No |
| **Offline** | Yes | Yes |
| **GUI** | Yes | Yes |
| **CLI** | No | Yes |
| **Batch Processing** | No | Yes |
| **Cross-platform** | Yes | Yes |
| **Auto-update** | Yes | Yes |
| **File Size** | Small | Medium (100-200MB) |
| **Performance** | Depends on Office | Fast and lightweight |

---

## 🐛 Troubleshooting

### Application Won't Start

**Windows:**
```bash
# Run command line version to debug
utm-converter convert --help
```

**Mac:**
- Check if app is in Applications folder
- Try: `sudo xattr -rd com.apple.quarantine /Applications/UTMThesisConverter.app`

**Linux:**
- Make sure executable: `chmod +x utm-thesis-converter.AppImage`
- Try with: `./utm-thesis-converter.AppImage --no-sandbox`

### Conversion Fails

1. Make sure file is valid .docx
2. Check file is not password protected
3. Validate file: `utm-converter validate -i thesis.docx`
4. Try with smaller test file first

### File Dialog Doesn't Open

- Restart application
- Check folder permissions
- Try different location

---

## 📚 Next Steps

1. **Download Application**
   - Get from GitHub releases
   - Or build from source

2. **Get LaTeX Template**
   - Download UTM template files
   - Place in project folder

3. **Convert Your Thesis**
   - Open application or use CLI
   - Upload Word document
   - Fill metadata
   - Convert to LaTeX

4. **Compile PDF**
   - Open in Overleaf or local editor
   - Use `pdflatex` or `xelatex`
   - Generate PDF

---

## 📞 Support

- **Issues:** https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin/issues
- **Discussions:** https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin/discussions
- **Email:** support@your-domain.com
- **Documentation:** See docs/ folder

---

## 📄 License

MIT License - Free to use, modify, and distribute

---

**Enjoy converting! Happy thesis writing! 🎓**
