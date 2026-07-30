# 📄 UTM Thesis to LaTeX Converter

A powerful Microsoft Word add-in that converts your thesis document to LaTeX format compliant with Universiti Teknologi Malaysia (UTM) guidelines.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![Platform](https://img.shields.io/badge/platform-Word%202016+-blue)

## 🖥️ Download Windows Desktop App (.exe)

> **No command line needed — watch the animated step-by-step video guide:**
>
> 👉 **[Open Visual Guide — How to Build & Download Your .exe](docs/how-to-build-exe.html)**
>
> The guide auto-plays through all 7 steps:
> 1. Open your GitHub repository
> 2. Click the **Actions** tab
> 3. Click **"Build Windows Installer (.exe)"** workflow
> 4. Click the green **"Run workflow"** button
> 5. Wait ~20 minutes while GitHub builds
> 6. Go to **Releases** tab → download `UTM-Thesis-Converter-Setup.exe`
> 7. Double-click the installer — done!

---

## 🎯 Features

✅ **Easy to Use** - Write in familiar Microsoft Word
✅ **One-Click Conversion** - Convert entire document to LaTeX
✅ **UTM Compliant** - Automatic formatting per UTM guidelines
✅ **Cross-Platform** - Works on Windows, Mac, and Word Online
✅ **Multiple Degree Types** - PhD, Master's, Bachelor's support
✅ **Extensible** - Framework for other Malaysian universities
✅ **Metadata Auto-Population** - Preserve document metadata
✅ **Live Preview** - See LaTeX output before download

## 📋 Requirements

- Microsoft Word 2016 or newer
- Office 365 or Word Online
- Internet connection
- UTM LaTeX template files

## 🚀 Quick Start

### For Students

1. **Install the Add-in**
   ```
   Insert → Get Add-ins → Upload My Add-in → Select manifest.xml
   ```

2. **Open Your Thesis**
   - Open your Word document

3. **Convert**
   - Click "UTM Thesis Converter" in Insert tab
   - Select university and degree type
   - Fill in thesis metadata
   - Click "Convert to LaTeX"

4. **Download**
   - Click "Download as .tex file"
   - Use with UTM LaTeX template

### For Developers

```bash
# Clone repository
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for detailed setup.

## 📚 Documentation

- **[Getting Started](GETTING_STARTED.md)** - Quick start guide
- **[Installation Guide](INSTALLATION.md)** - Deployment instructions
- **[Architecture Guide](docs/ARCHITECTURE.md)** - Technical overview
- **[Development Guide](docs/DEVELOPMENT.md)** - Developer setup

## 📁 Project Structure

```
word-to-latex-thesis-addin/
├── src/
│   ├── components/          # React UI components
│   ├── converters/          # Conversion logic
│   ├── templates/           # LaTeX template generators
│   ├── styles/              # CSS stylesheets
│   ├── assets/              # Images and resources
│   ├── App.tsx              # Main application
│   └── index.tsx            # React entry point
├── backend/                 # Optional backend service
├── public/                  # HTML templates
├── templates/               # University templates (UTM, etc.)
├── docs/                    # Documentation
├── manifest.xml             # Office Add-in manifest
└── package.json             # Dependencies
```

## 🔄 Conversion Flow

```
Word Document
    ↓
DocumentExtractor (reads content via Office.js)
    ↓
StyleMapper (maps Word styles to LaTeX)
    ↓
LaTeXConverter (converts content)
    ↓
UTMTemplateGenerator (applies UTM formatting)
    ↓
LaTeX Output (.tex file)
    ↓
Download / Copy to Clipboard
```

## ✨ Supported Elements

- ✅ Text formatting (bold, italic, underline)
- ✅ Heading hierarchies
- ✅ Paragraphs and line breaks
- ✅ Lists (bullet and numbered)
- ✅ Basic tables
- ✅ Image references
- ✅ Document metadata
- ✅ Special character escaping

## 🎓 UTM Formatting Applied

- 1.5 line spacing
- Proper margins (2.5cm top/bottom, 3cm left, 2.5cm right)
- Times New Roman font
- Chapter/section hierarchies
- Automatic table of contents
- Bibliography formatting
- Supervisor information

## 🛠️ Technology Stack

**Frontend:**
- React 18
- TypeScript
- Office.js API
- CSS3

**Backend (Optional):**
- Node.js
- Express.js

**Build Tools:**
- npm
- TypeScript Compiler

## 📦 Installation Options

### Option 1: Shared Drive (Enterprise)
```
File → Options → Trust Center → Trusted Add-in Catalogs
Add: \\shared-drive\add-ins\utm-thesis\manifest.xml
```

### Option 2: Web Server (HTTPS)
```
Update manifest.xml with your domain
Deploy to https://your-domain.com/
```

### Option 3: Local Testing
```
http://localhost:3000/manifest.xml
```

## 🐛 Troubleshooting

### Add-in won't load
- Restart Word
- Check internet connection
- Update Office version
- Verify manifest.xml syntax

### Conversion fails
- Ensure document is not password protected
- Check all required fields are filled
- Review console for error messages

See [DEVELOPMENT.md](docs/DEVELOPMENT.md#troubleshooting) for more help.

## 🔐 Security

- No document content is transmitted externally (unless configured)
- All conversion happens client-side
- Follows Microsoft Office security guidelines
- No persistent data storage

## 🚀 Future Enhancements

- [ ] Support for more Malaysian universities
- [ ] Citation management integration
- [ ] Enhanced equation handling
- [ ] Cross-reference preservation
- [ ] Batch conversion
- [ ] Custom template editor
- [ ] Real-time LaTeX preview
- [ ] Multilingual support

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

See [DEVELOPMENT.md](docs/DEVELOPMENT.md#contributing) for guidelines.

## 💬 Support

- 📖 [Documentation](docs/)
- 🐛 [Issue Tracker](https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin/issues)
- 📧 Email support
- 💬 GitHub Discussions

## 👨‍💻 Author

**Omar Lafta**
- GitHub: [@omarlafta82-cloud](https://github.com/omarlafta82-cloud)

## 🙏 Acknowledgments

- UTM Faculty of Engineering for guidance
- Microsoft Office JavaScript API team
- React and TypeScript communities
- All contributors and testers

## 📝 Changelog

### v1.0.0 (2026-07-27)
- ✨ Initial release
- 🎯 UTM thesis template support
- 📄 Document extraction and conversion
- 💾 LaTeX export functionality
- 🎨 User-friendly interface

---

**⭐ If this project helped you, please star it on GitHub!**

**Made with ❤️ for Malaysian students**
