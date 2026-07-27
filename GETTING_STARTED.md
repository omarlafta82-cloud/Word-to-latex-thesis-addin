# Getting Started - UTM Thesis to LaTeX Converter

## What is This?

UTM Thesis to LaTeX Converter is a Microsoft Word add-in that converts your Word thesis document to LaTeX format compliant with UTM thesis guidelines.

**Why use it?**
- ✅ Write in familiar Microsoft Word
- ✅ Automatic conversion to UTM-compliant LaTeX
- ✅ No manual formatting required
- ✅ One-click download as .tex file
- ✅ Perfect for PDF generation with UTM template

## Quick Start

### 1. Install the Add-in

**In Word:**
1. Click **Insert** tab
2. Click **Get Add-ins** → **My Add-ins** → **Upload My Add-in**
3. Select or paste the manifest URL
4. Click **Add**

### 2. Open Your Thesis Document

Open your Word document in Microsoft Word.

### 3. Click the Add-in Button

- In the **Insert** tab, click **UTM Thesis Converter**
- The taskpane will open on the right side

### 4. Select Your Template

1. Choose **University**: Universiti Teknologi Malaysia (UTM)
2. Choose **Degree Type**:
   - Doctor of Philosophy (PhD)
   - Master's Degree
   - Bachelor's Degree
3. Click **Continue to Metadata →**

### 5. Fill in Your Information

Enter the following details:

| Field | Required? | Example |
|-------|-----------|----------|
| Thesis Title | Yes | "Machine Learning for Healthcare Applications" |
| Author Name | Yes | "Ahmad Ibrahim" |
| Graduation Year | Yes | 2024 |
| Supervisor | Yes | "Dr. John Smith" |
| Co-Supervisor | No | "Prof. Jane Doe" |
| Faculty/Department | Yes | "Faculty of Engineering" |
| Abstract | No | Your thesis abstract |

### 6. Convert to LaTeX

1. Review your information
2. Click **Convert to LaTeX →**
3. Wait for conversion to complete

### 7. Download or Copy

Once conversion is complete:

**Option A: Download**
- Click **📥 Download as .tex file**
- Save to your computer

**Option B: Copy**
- Click **📋 Copy to Clipboard**
- Paste into your LaTeX editor

## Next Steps

After downloading the `.tex` file:

1. **Get the UTM LaTeX Template Files**
   - Download from your faculty/department
   - Should include: `utmthesis.cls`, `fontsize.sty`, `.bst` files

2. **Prepare Your LaTeX Project**
   ```
   my-thesis/
   ├── thesis.tex          (your converted file)
   ├── utmthesis.cls
   ├── fontsize.sty
   ├── reference.bib
   ├── chapters/
   │   ├── chapter1.tex
   │   └── chapter2.tex
   └── images/
   ```

3. **Edit Your LaTeX Files**
   - Use Overleaf (online) or local LaTeX editor
   - Add chapters and content
   - Update references

4. **Compile to PDF**
   ```bash
   pdflatex thesis.tex
   bibtex thesis.aux
   pdflatex thesis.tex
   pdflatex thesis.tex
   ```

## Features

### ✅ Supported Elements
- Text formatting (bold, italic, underline)
- Heading hierarchies (automatically converted to chapters/sections)
- Paragraphs and line breaks
- Lists (bullet and numbered)
- Basic tables
- Image references
- Metadata (title, author, supervisor)

### ⚙️ Formatting Applied
- 1.5 line spacing (UTM requirement)
- Proper margins (2.5cm top/bottom, 3cm left, 2.5cm right)
- Times New Roman font
- Chapter/section hierarchies
- Automatic TOC generation
- Bibliography settings

### 🚀 Coming Soon
- Citation management
- Enhanced equation handling
- Cross-reference preservation
- Support for more Malaysian universities

## Troubleshooting

### Problem: Add-in won't load
**Solution:**
- Restart Word
- Check internet connection
- Update Office to latest version

### Problem: Conversion fails
**Solution:**
- Ensure document is not password protected
- Check that all required fields are filled
- Try with a smaller test document first

### Problem: LaTeX compilation error
**Solution:**
- Check that all required template files are in place
- Verify file encoding is UTF-8
- See LaTeX error message for specific issue

### Problem: Formatting looks wrong
**Solution:**
- Check that UTM template files are correct version
- Review document for unsupported formatting
- Refer to DEVELOPMENT.md for advanced customization

## Tips & Best Practices

✅ **Do:**
- Use consistent heading styles (Heading 1, 2, 3)
- Keep document organized before conversion
- Use Word's native formatting tools
- Test conversion on a sample chapter first
- Backup your original Word document

❌ **Don't:**
- Use manual spacing or tabs
- Mix different heading styles randomly
- Include complex nested tables
- Use password-protected documents
- Modify manifest.xml unless you know what you're doing

## Getting Help

1. **Check Documentation**
   - [INSTALLATION.md](INSTALLATION.md) - Setup instructions
   - [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) - Advanced topics
   - [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Technical details

2. **Contact Your University**
   - Faculty IT support
   - Graduate office
   - Thesis advisor

3. **Report Issues**
   - Create GitHub issue with details
   - Include Word document sample (anonymized)
   - Describe conversion error

## FAQ

**Q: Is my document safe?**
A: Yes, the add-in only reads your document content. No data is sent to servers unless you explicitly configure it.

**Q: Can I use this on Mac?**
A: Yes, this works on both Windows and Mac versions of Microsoft Word.

**Q: Can I edit the converted LaTeX?**
A: Absolutely! The output is standard LaTeX that you can edit freely.

**Q: Do I need Overleaf account?**
A: No, you can use any LaTeX editor (local or online).

**Q: Will this work with my university's template?**
A: Yes, the conversion produces standard LaTeX that works with any template.

## Support

For questions or issues:
- 📧 Email: [support contact]
- 💬 GitHub Issues: [link]
- 📚 Documentation: [docs/](docs/)

---

**Happy writing! Good luck with your thesis! 🎓**
