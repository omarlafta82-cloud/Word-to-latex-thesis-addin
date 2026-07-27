# UTM Thesis to LaTeX Converter - Architecture

## Overview

This Word add-in provides a seamless way to convert Microsoft Word documents to LaTeX format compliant with Universiti Teknologi Malaysia (UTM) thesis guidelines.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Microsoft Word                            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         UTM Thesis Converter Add-in                  │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │      React UI Components                       │  │   │
│  │  │  • TemplateSelector                           │  │   │
│  │  │  • MetadataForm                               │  │   │
│  │  │  • ConversionPreview                          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │                      ↓                                │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │   DocumentExtractor (Office.js API)           │  │   │
│  │  │  • Read document content                       │  │   │
│  │  │  • Extract metadata                            │  │   │
│  │  │  • Analyze document structure                  │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│            Conversion Engine (Client-side)                   │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │   LaTeXConverter                                   │     │
│  │  • Maps Word styles to LaTeX commands             │     │
│  │  • Handles special characters                      │     │
│  │  • Escapes reserved LaTeX characters              │     │
│  └────────────────────────────────────────────────────┘     │
│                      ↓                                       │
│  ┌────────────────────────────────────────────────────┐     │
│  │   UTMTemplateGenerator                            │     │
│  │  • Generates LaTeX preamble                        │     │
│  │  • Applies UTM formatting rules                    │     │
│  │  • Creates front matter                            │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Output: LaTeX Document (.tex)                   │
│                                                              │
│  • Complete LaTeX source code                               │
│  • UTM-compliant formatting                                 │
│  • Ready for compilation                                    │
└─────────────────────────────────────────────────────────────┘
```

## Key Components

### Frontend (React)

**Components:**
- `TemplateSelector.tsx` - University and degree type selection
- `MetadataForm.tsx` - Thesis metadata input (title, author, supervisor, etc.)
- `ConversionPreview.tsx` - LaTeX output preview and download

**Styles:**
- `TemplateSelector.css` - Template selection styling
- `MetadataForm.css` - Form styling
- `ConversionPreview.css` - Preview panel styling

### Conversion Engine

**DocumentExtractor.ts**
- Reads content from Word document using Office.js API
- Extracts paragraphs, images, tables, and metadata
- Parses document structure and styles

**LaTeXConverter.ts**
- Main conversion logic
- Handles text formatting (bold, italic, underline)
- Escapes special LaTeX characters
- Manages front matter generation

**StyleMapper.ts**
- Maps Word styles to LaTeX commands
- Heading hierarchy conversion (H1→\chapter, H2→\section, etc.)
- Style-to-command mapping

**UTMTemplateGenerator.ts**
- Generates LaTeX preamble with UTM-specific settings
- Applies 1.5 line spacing
- Sets margins according to UTM guidelines
- Generates front matter (title page, supervisor info)

### Backend (Optional)

**Express Server** (port 3001)
- Conversion API endpoint
- Template management
- Health check endpoint

## Data Flow

1. **User Opens Word Document**
   - Add-in loads in Word taskpane

2. **User Selects Template**
   - Choose university (currently UTM)
   - Select degree type (PhD, Master's, Bachelor's)

3. **User Fills Metadata**
   - Title, author, supervisor, faculty, etc.
   - Abstract (optional)

4. **Conversion Triggered**
   - DocumentExtractor reads Word content
   - LaTeXConverter processes content
   - UTMTemplateGenerator applies formatting

5. **Output Generated**
   - LaTeX code preview displayed
   - User can download as .tex file
   - User can copy to clipboard

## Technology Stack

**Frontend:**
- React 18
- TypeScript
- Office.js API
- CSS3

**Backend:**
- Node.js
- Express.js
- TypeScript

**Deployment:**
- Shared drive distribution
- Local testing via manifest.xml
- Compatible with Windows, Mac, Office 365, Word Online

## File Structure

```
word-to-latex-thesis-addin/
├── src/
│   ├── components/
│   │   ├── TemplateSelector.tsx
│   │   ├── MetadataForm.tsx
│   │   └── ConversionPreview.tsx
│   ├── converters/
│   │   ├── DocumentExtractor.ts
│   │   ├── LaTeXConverter.ts
│   │   └── StyleMapper.ts
│   ├── templates/
│   │   └── UTMTemplateGenerator.ts
│   ├── styles/
│   │   ├── TemplateSelector.css
│   │   ├── MetadataForm.css
│   │   └── ConversionPreview.css
│   ├── assets/
│   │   └── style.css
│   ├── App.tsx
│   └── index.tsx
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   └── converters/
│   │       └── docxConverter.ts
│   ├── package.json
│   └── tsconfig.json
├── public/
│   ├── taskpane.html
│   └── commands.html
├── templates/
│   └── utm/
│       ├── config.json
│       └── [UTM LaTeX files]
├── docs/
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT.md
├── manifest.xml
├── tsconfig.json
├── package.json
└── .gitignore
```

## Future Enhancements

1. Support for additional Malaysian universities
2. Enhanced citation management (Zotero, Mendeley integration)
3. Table and image handling improvements
4. Formula/equation conversion
5. Cross-reference preservation
6. Batch conversion for multiple documents
7. Custom template editor
8. Real-time LaTeX preview
