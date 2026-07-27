# Installation Guide - UTM Thesis to LaTeX Converter

## For End Users (Students)

### Prerequisites

- Microsoft Word (2016 or newer, Office 365, or Word Online)
- Internet connection

### Installation Steps

#### Method 1: From Shared Drive (Recommended for Universities)

1. **Receive the manifest URL** from your IT administrator
   - Example: `\\shared-drive\add-ins\utm-thesis-converter\manifest.xml`

2. **In Microsoft Word:**
   - Click **Insert** tab
   - Click **Get Add-ins** → **My Add-ins** → **Upload My Add-in**
   - Select "Upload from URL" (if available) or browse to the shared drive
   - Paste the manifest URL

3. **Authorize the add-in**
   - Click **Add** or **Install**
   - Grant necessary permissions

4. **Start Using**
   - The add-in will appear in Word's **Insert** tab
   - Click **UTM Thesis Converter** to open the taskpane

#### Method 2: From Local File (For Testing)

1. **Download manifest.xml** to your computer

2. **In Microsoft Word:**
   - Click **Insert** tab
   - Click **Get Add-ins** → **My Add-ins** → **Upload My Add-in**
   - Browse and select the `manifest.xml` file
   - Click **Upload**

### Troubleshooting

**Issue: Add-in won't load**
- Ensure Word is up to date
- Try restarting Word
- Check your internet connection

**Issue: "Sorry, we can't add this add-in" error**
- Verify manifest.xml file is valid
- Check file permissions
- Try uploading from a different location

---

## For Administrators/Deployers

### Prerequisites

- Node.js 16+ and npm
- HTTPS server or Microsoft 365 tenant
- Access to shared drive or cloud storage

### Deployment Steps

#### Step 1: Build the Application

```bash
# Clone repository
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
cd word-to-latex-thesis-addin

# Install dependencies
npm install

# Build for production
npm run build
```

#### Step 2: Configure Manifest

Edit `manifest.xml` with your deployment URLs:

```xml
<SourceLocation DefaultValue="https://your-domain.com/taskpane.html"/>
<Url id="Commands.Url" DefaultValue="https://your-domain.com/commands.html"/>
```

#### Step 3: Deploy Files

**Option A: Web Server (HTTPS)**
```bash
# Deploy built files to your web server
cp -r dist/* /var/www/html/utm-thesis-converter/
cp public/* /var/www/html/utm-thesis-converter/
cp manifest.xml /var/www/html/utm-thesis-converter/
```

**Option B: Shared Drive (SMB)**
```bash
# Copy files to shared drive
cp -r dist/* \\\\shared-drive\\add-ins\\utm-thesis
cp public/* \\\\shared-drive\\add-ins\\utm-thesis
cp manifest.xml \\\\shared-drive\\add-ins\\utm-thesis
```

#### Step 4: Distribute to Users

**For Microsoft 365/Office 365:**
- Upload manifest to Microsoft AppSource or centralized catalog
- Or provide manifest URL to users

**For Shared Drive:**
- Distribute shared drive path: `\\shared-drive\add-ins\utm-thesis\manifest.xml`

**For Email/Documentation:**
- Include manifest URL in setup instructions
- Provide troubleshooting guide

### Security Considerations

1. **HTTPS Required**
   - All URLs must use HTTPS (except localhost for testing)
   - Obtain SSL certificate for your domain

2. **Permissions**
   - Grant read-only access to template files
   - Restrict write access to deployment directories

3. **Updates**
   - Maintain version control
   - Test updates before deployment
   - Provide rollback capability

### Configuration

Create `.env` file for your deployment:

```
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
BACKEND_URL=https://api.your-domain.com
OFFICE_ADD_IN_ID=your-add-in-id
```

### Performance Optimization

1. **CDN Delivery**
   - Use CDN for static assets
   - Cache-bust filenames: `app.abc123.js`

2. **Minification**
   - Already done in production build

3. **Lazy Loading**
   - Components load on demand

### Monitoring

Track add-in usage:
- Monitor error logs
- Track conversion success rate
- Collect user feedback

### Support

For deployment assistance:
- Review [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- Check [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Create GitHub issue for bugs
