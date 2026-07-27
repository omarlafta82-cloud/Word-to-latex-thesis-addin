# UTM Thesis Word Add-in

A Microsoft Word add-in that converts thesis documents to LaTeX format while maintaining compliance with Universiti Teknologi Malaysia (UTM) and other Malaysian universities' thesis formatting guidelines.

## Features

- ✅ Write thesis in Microsoft Word with familiar interface
- ✅ Auto-format according to UTM thesis template specifications (v7.0 - 2023)
- ✅ Support for multiple Malaysian university templates (expandable)
- ✅ Convert Word document (.docx) to LaTeX (.tex)
- ✅ Preview LaTeX output before export
- ✅ Maintain all formatting, citations, and cross-references
- ✅ Support for images, tables, and complex layouts
- ✅ One-click download as .tex file

## Supported Universities

- **Universiti Teknologi Malaysia (UTM)** - v7.0 (2023)
- More universities coming soon (UM, USM, UPM, UKM)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Office API**: Office JavaScript API (Office.js)
- **Conversion Engine**: Pandoc + Custom LaTeX Mapper
- **Backend**: Node.js + Express
- **Hosting**: Azure / AWS / Self-hosted

## Quick Start

```bash
# Clone and install
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin
npm install

# Start development
npm start
```

## Usage

1. Open Microsoft Word
2. Go to **Insert → Get Add-ins → Upload My Add-in**
3. Select `manifest.xml`
4. Click the **"Convert to LaTeX"** button
5. Select your university and degree type
6. Click **"Convert"** to generate LaTeX
7. Click **"Download"** to save as `.tex` file

## Documentation

- [Full README](docs/README.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [API Documentation](docs/API.md)

## License

MIT License - See LICENSE file

**Made with ❤️ for Malaysian students**
