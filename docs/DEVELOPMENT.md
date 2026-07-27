# UTM Thesis to LaTeX Converter - Development Guide

## Prerequisites

- Node.js 16+ and npm
- Microsoft Word (2016+, Office 365, or Word Online)
- Git
- A code editor (VS Code recommended)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin
```

### 2. Install Dependencies

```bash
# Frontend dependencies
npm install

# Backend dependencies (optional)
cd backend
npm install
cd ..
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

## Development Workflow

### Start Frontend Development Server

```bash
npm start
```

This will:
- Start React dev server on `http://localhost:3000`
- Enable hot module reloading
- Serve the taskpane.html and commands.html

### Start Backend Server (Optional)

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:3001`

### Build for Production

```bash
# Frontend build
npm run build

# Backend build
cd backend
npm run build
cd ..
```

## Testing in Word

### Option 1: Local Testing (Recommended)

1. **Update manifest.xml** with your local URLs:
   ```xml
   <SourceLocation DefaultValue="http://localhost:3000/taskpane.html"/>
   ```

2. **In Microsoft Word:**
   - Go to **File → Options → Trust Center → Trust Center Settings → Trusted Add-in Catalogs**
   - Add `http://localhost:3000/manifest.xml` to the catalog

3. **Load the Add-in:**
   - **Insert → Get Add-ins → My Add-ins → Upload My Add-in**
   - Select the `manifest.xml` file from your project

### Option 2: Shared Drive Distribution

1. Deploy manifest.xml to shared drive
2. Distribute the manifest URL to users
3. Users load add-in via **Insert → Get Add-ins → Upload My Add-in**

## File Organization

### Components Directory (`src/components/`)

```typescript
// TemplateSelector.tsx - University & degree type selection
<TemplateSelector onSelect={(uni, degree) => { ... }} />

// MetadataForm.tsx - Thesis metadata input
<MetadataForm 
  university="utm" 
  degreeType="phd"
  onSubmit={(metadata) => { ... }}
  isLoading={false}
/>

// ConversionPreview.tsx - Output preview & download
<ConversionPreview 
  latexOutput="\\documentclass..."
  isLoading={false}
  onDownload={() => { ... }}
  onReset={() => { ... }}
/>
```

### Converters Directory (`src/converters/`)

```typescript
// DocumentExtractor.ts - Extract Word content
const extractor = new DocumentExtractor();
const content = await extractor.extractFromWord();

// LaTeXConverter.ts - Convert to LaTeX
const converter = new LaTeXConverter('utm', 'phd', metadata);
const latex = await converter.convert(content);

// StyleMapper.ts - Map Word styles to LaTeX
const mapper = new StyleMapper();
const heading = mapper.mapHeading(1, 'Chapter Title');
// Output: \chapter{Chapter Title}
```

### Templates Directory (`src/templates/`)

```typescript
// UTMTemplateGenerator.ts - Generate LaTeX template
const generator = new UTMTemplateGenerator('phd');
const preamble = generator.generatePreamble(metadata);
```

## Key APIs Used

### Office.js API

```typescript
// Read document content
await Word.run(async context => {
  const body = context.document.body;
  body.load('text');
  await context.sync();
  console.log(body.text);
});
```

### React Hooks

```typescript
const [state, setState] = useState(initialValue);
const [isLoading, setIsLoading] = useState(false);
```

## Debugging

### Browser DevTools

1. Open Word
2. Right-click on add-in taskpane
3. Select **Inspect** or **Inspect Element**
4. Use Chrome DevTools to debug

### Console Logging

```typescript
console.log('Debug info:', variable);
console.error('Error:', error);
```

### Visual Studio Code

Set up debugging in `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach Chrome",
      "port": 9222,
      "pathMapping": {
        "/": "${workspaceRoot}/"
      }
    }
  ]
}
```

## Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make changes
3. Test thoroughly
4. Commit: `git commit -am 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

## Common Issues

### Add-in Won't Load

**Solution:**
- Check manifest.xml syntax
- Verify URLs are correct and accessible
- Check browser console for errors
- Try clearing Office cache

### Conversion Errors

**Solution:**
- Check document content is valid
- Verify metadata is complete
- Review console logs for specific errors
- Ensure LaTeX special characters are properly escaped

### Word API Errors

**Solution:**
- Ensure you're using `Word.run()` context
- Call `context.sync()` after operations
- Load required properties before accessing

## Resources

- [Office.js Documentation](https://docs.microsoft.com/en-us/office/dev/add-ins/reference/overview/word-add-ins-reference-overview)
- [Word Add-in API Best Practices](https://docs.microsoft.com/en-us/office/dev/add-ins/word/best-practices)
- [Office Add-in Manifest Schema](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Getting Help

- Check the [docs/](docs/) directory
- Review existing [GitHub Issues](https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin/issues)
- Create a new issue with detailed information
