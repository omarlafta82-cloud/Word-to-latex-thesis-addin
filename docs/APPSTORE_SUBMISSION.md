# UTM Thesis to LaTeX Converter - AppSource Submission

This guide explains how to publish the add-in to Microsoft AppSource (Office Store) for easy installation.

## 📋 Prerequisites for AppSource

### Account Requirements
1. **Microsoft Partner Center Account**
   - Go to: https://partner.microsoft.com/
   - Sign up with Microsoft account
   - Complete profile setup

2. **Developer Account**
   - Annual subscription fee: ~$99 USD
   - Verification process (1-2 weeks)

3. **Company Information**
   - Company name
   - Address
   - Tax ID
   - Contact information

## 🔧 Technical Requirements

### Before Submission

✅ **Manifest.xml Validation**
```bash
npm install -g office-addin-manifest
office-addin-manifest validate manifest.xml
```

✅ **HTTPS Deployment**
- All URLs must use HTTPS
- SSL certificate required
- Azure, AWS, or other hosting

✅ **Store Assets**
- App icon (96x96, 128x128, 194x194 pixels)
- Screenshots (1280x720 or 1920x1080)
- Description and keywords
- Privacy policy URL
- Support contact information

## 📦 Build & Package

### 1. Build for Production

```bash
# Install dependencies
npm install

# Build
npm run build

# Build backend (optional)
cd backend
npm run build
cd ..
```

### 2. Deploy to HTTPS Server

Options:
- **Azure Static Web Apps** (Recommended)
- **AWS S3 + CloudFront**
- **GitHub Pages + Custom Domain**
- **Vercel or Netlify**
- **Traditional web hosting**

### 3. Update manifest.xml

Update all URLs to your production domain:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1">
  ...
  <DefaultSettings>
    <!-- Change localhost to your domain -->
    <SourceLocation DefaultValue="https://your-domain.com/taskpane.html"/>
  </DefaultSettings>
  ...
  <VersionOverrides ...>
    <Resources>
      <bt:Urls>
        <bt:Url id="Commands.Url" DefaultValue="https://your-domain.com/commands.html"/>
        <bt:Url id="Taskpane.Url" DefaultValue="https://your-domain.com/taskpane.html"/>
      </bt:Urls>
    </Resources>
  </VersionOverrides>
</OfficeApp>
```

## 📝 AppSource Submission Steps

### Step 1: Partner Center Setup

1. Go to https://partner.microsoft.com/
2. Sign in with Microsoft account
3. Complete company verification
4. Set up payout account

### Step 2: Create New Submission

1. In Partner Center, go to **Commercial Marketplace**
2. Click **Office Add-ins**
3. Click **Create New Submission**
4. Choose **Office Add-in**

### Step 3: Fill Setup Information

**Basic Information:**
- Name: "UTM Thesis to LaTeX Converter"
- Description: "Convert Microsoft Word thesis documents to LaTeX format compliant with Universiti Teknologi Malaysia guidelines"
- Category: "Productivity"
- Support URL: Your support page
- Privacy Policy: Your privacy policy URL
- License Agreement: Your license URL

### Step 4: Upload Manifest

1. Upload your `manifest.xml` file
2. System validates it
3. If errors, fix and reupload

### Step 5: Add Store Listings

**English (US):**
- Short name: "UTM Thesis Converter"
- Long description: Full feature description
- Keywords: "latex, thesis, word, utm, converter"
- Support email: your-email@example.com
- Privacy policy: https://your-domain.com/privacy
- Support URL: https://your-domain.com/support

### Step 6: Upload Graphics

Required images:

**Icon (Required - 96x96 PNG):**
- Clean, recognizable add-in icon
- Works at small sizes
- Transparent background recommended

**Screenshots (2-5 images):**
- 1280x720 or 1920x1080 pixels
- Show key features
- Include labels/captions
- PNG or JPG format

**Example screenshots to include:**
1. Add-in opening in Word
2. Template selector screen
3. Metadata form
4. Preview with download button
5. Offline mode indicator

### Step 7: Compliance & Testing

Microsoft will test:

✅ **Functionality**
- Add-in loads correctly
- All features work
- No crashes

✅ **Security**
- No malware
- Secure HTTPS connection
- Safe code practices

✅ **Performance**
- Loads within 5 seconds
- Responsive UI
- No memory leaks

✅ **User Experience**
- Clear instructions
- Professional appearance
- Handles errors gracefully

✅ **Compliance**
- Privacy policy present
- Terms of use present
- No prohibited content
- Accurate description

### Step 8: Submit for Review

1. Review all information
2. Click **Submit for Review**
3. Microsoft reviews (3-5 business days)
4. You receive feedback
5. Fix any issues
6. Resubmit if needed

### Step 9: Approval & Publishing

Once approved:
- Add-in published to Office Store
- Appears in "Get Add-ins"
- Available worldwide
- Users can install directly

## 🎨 Creating Store Assets

### Icon Design

Create icon in these sizes:
- 96x96 pixels
- 128x128 pixels  
- 194x194 pixels

**Design tips:**
- Clear and recognizable
- Works at small sizes
- Professional appearance
- Transparent background
- Avoid text if possible

### Screenshot Examples

**Screenshot 1 - Main Interface:**
```
[Word Document with Add-in Taskpane Open]
Title: "Convert Word to LaTeX in Seconds"
Caption: "Select your university and degree type"
```

**Screenshot 2 - Metadata:**
```
[Metadata Form Screen]
Title: "Fill in Your Thesis Information"
Caption: "Simple form with all required fields"
```

**Screenshot 3 - Preview:**
```
[LaTeX Output Preview]
Title: "Preview and Download"
Caption: "Download .tex file or copy to clipboard"
```

**Screenshot 4 - Offline:**
```
[Offline Indicator]
Title: "Works Offline"
Caption: "Complete offline support with local storage"
```

## 📋 Checklist Before Submission

- [ ] manifest.xml is valid and error-free
- [ ] All URLs use HTTPS
- [ ] Add-in loads in 5 seconds
- [ ] All features tested and working
- [ ] No console errors
- [ ] Privacy policy written
- [ ] Terms of use written
- [ ] Icon created (3 sizes)
- [ ] Screenshots created (2-5)
- [ ] Description written
- [ ] Keywords selected
- [ ] Support email verified
- [ ] Company information complete
- [ ] Payment method added

## 🔄 Update Process

After initial approval, to release updates:

1. Update version in manifest.xml
2. Build and test
3. Deploy to production
4. In Partner Center, click **Create New Submission**
5. Upload updated manifest
6. Submit changes
7. Microsoft reviews (usually 1-2 days)
8. Approved and published

## ⏱️ Timeline

- **Account Setup:** 1-2 weeks
- **Initial Submission:** 3-5 business days review
- **Approval & Publishing:** 1-2 days
- **Total Time:** 2-3 weeks

## 💰 Costs

- **Developer Account:** ~$99/year
- **Hosting/Domain:** ~$5-20/month
- **SSL Certificate:** Free (Let's Encrypt) to $200+/year
- **Total First Year:** ~$250-400

## 📚 Resources

- [Office Add-ins on AppSource](https://appsource.microsoft.com/en-us/marketplace/apps?product=office)
- [Partner Center Documentation](https://docs.microsoft.com/partner-center/)
- [Office Add-in Manifest Reference](https://docs.microsoft.com/office/dev/add-ins/develop/add-in-manifests)
- [AppSource Validation Policies](https://docs.microsoft.com/office/dev/store/validation-policies)

## 🆘 Support

If submission is rejected:

1. Read the rejection reason carefully
2. Fix the issue
3. Update your submission
4. Resubmit
5. Contact Microsoft support if unclear

## 🎯 After Publishing

### Marketing
- Announce on social media
- Share with UTM community
- Post in forums
- Email students

### Maintenance
- Monitor user feedback
- Fix bugs quickly
- Release updates regularly
- Keep documentation current

### Growth
- Expand to other universities
- Add more features
- Improve based on feedback
- Maintain high ratings

---

**Ready to publish? Start with Partner Center registration!**
