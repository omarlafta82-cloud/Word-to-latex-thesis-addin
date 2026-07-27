# Microsoft AppStore Deployment Guide

## 🚀 Complete Path to AppStore Publication

This guide walks you through publishing your add-in to Microsoft Office Store (now called **AppSource**) so users can find and install it like any other add-in.

## 📊 Current Status

✅ Add-in code: Complete
✅ Features: Complete (including offline)
✅ Documentation: Complete
❌ AppStore: Not yet published

## 🎯 Steps to Publish

### Phase 1: Preparation (1-2 weeks)

#### Step 1.1: Create Partner Center Account

1. Go to https://partner.microsoft.com/
2. Sign in with Microsoft account (create if needed)
3. Complete account setup:
   - Personal information
   - Company details
   - Tax information
4. Pay developer fee (~$99/year)
5. Wait for verification (1-2 weeks)

#### Step 1.2: Set Up Hosting

Choose one option:

**Option A: Azure (Recommended)**
```bash
# Create Azure account
# Create Static Web App
# Deploy built files
# Get production URL: https://your-app.azurewebsites.net
```

**Option B: GitHub Pages + Custom Domain**
```bash
# Push to GitHub
# Enable GitHub Pages
# Point custom domain to GitHub
# Get production URL: https://your-domain.com
```

**Option C: Traditional Hosting**
- Hostinger, GoDaddy, AWS, etc.
- Upload built files via FTP
- Get production URL: https://your-domain.com

#### Step 1.3: Get SSL Certificate

```bash
# If using Azure: Automatic (free)
# If using GitHub Pages: Automatic (free)
# If using traditional hosting:
#   - Use Let's Encrypt (free)
#   - Or purchase from GoDaddy, etc.
```

### Phase 2: Prepare Store Assets (1 week)

#### Step 2.1: Create Icons

You need 3 sizes (PNG format):
- 96x96 pixels
- 128x128 pixels
- 194x194 pixels

**Design tips:**
- Professional appearance
- Clearly represents thesis/LaTeX
- Works well at small sizes
- Suggested: Simple book/document with LaTeX formula

**Tool to create:**
- Figma (free)
- Canva (free)
- Adobe Express (free)
- Online icon makers

#### Step 2.2: Create Screenshots

Needed: 2-5 screenshots (1280x720 or 1920x1080)

**Screenshot 1: Main Interface**
- Show add-in opening in Word
- Display template selector
- Caption: "Select your university and degree type"

**Screenshot 2: Metadata Form**
- Show thesis information form
- Caption: "Fill in your thesis details"

**Screenshot 3: Preview & Download**
- Show LaTeX output
- Highlight download button
- Caption: "Download as .tex file instantly"

**Screenshot 4: Offline Feature**
- Show offline indicator
- Show conversion history
- Caption: "Works completely offline"

**Screenshot 5: Conversion History**
- Show saved conversions
- Show restore/delete options
- Caption: "Access all your previous conversions"

**Tools to capture:**
- Windows Snipping Tool
- Greenshot (free)
- ShareX (free)
- Screen recording software

### Phase 3: Prepare Documentation (1 week)

#### Step 3.1: Write Privacy Policy

Example template:
```markdown
# Privacy Policy

## Data Collection
- We do NOT collect any personal data
- Conversions are stored locally on your computer
- No data sent to external servers

## Storage
- All conversions saved in browser (IndexedDB)
- User can delete anytime
- Browser data can be cleared at any time

## Security
- No login required
- No accounts needed
- No tracking

## Contact
- Email: privacy@your-domain.com
```

Post at: `https://your-domain.com/privacy-policy`

#### Step 3.2: Write Terms of Use

Example template:
```markdown
# Terms of Use

## License
This add-in is licensed under MIT License

## Usage
- Educational and commercial use allowed
- Free to use
- Modify and redistribute with attribution

## Disclaimer
- Provided as-is without warranty
- Not responsible for data loss
- Users responsible for backups

## Support
- Email: support@your-domain.com
```

Post at: `https://your-domain.com/terms`

#### Step 3.3: Prepare Store Description

**Short Description (130 characters):**
```
Convert Word thesis documents to LaTeX format compliant with UTM guidelines. Works online and offline.
```

**Long Description (4000 characters max):**
```
UTM Thesis to LaTeX Converter is a Microsoft Word add-in that automatically converts your thesis documents to LaTeX format compliant with Universiti Teknologi Malaysia thesis guidelines.

✨ Key Features:
- Write your thesis in familiar Microsoft Word
- Convert to LaTeX with one click
- Supports PhD, Master's, and Bachelor's theses
- Complete offline support
- Automatic conversion history
- Download as .tex file
- Copy to clipboard
- Works on Windows, Mac, and Word Online

🚀 How to Use:
1. Open your thesis document
2. Click "Thesis to LaTeX" button
3. Select your university and degree type
4. Fill in thesis information
5. Download .tex file
6. Use with your LaTeX template

💡 Why Use This:
- Write in Word (faster, more familiar)
- LaTeX formatting for professional PDFs
- UTM compliance guaranteed
- No manual formatting needed
- Save time and effort

🔒 Privacy:
- No data collection
- Everything stays on your computer
- Works completely offline
- Your thesis is private

📚 Perfect for:
- UTM students and staff
- Thesis writers
- LaTeX users
- Anyone writing academic papers

🆘 Support:
Email: support@your-domain.com
Docs: https://your-domain.com/docs
```

**Keywords:**
```
latex, thesis, word, conversion, utm, academic, document, university, malaysia, phd, masters
```

### Phase 4: Submit to AppStore (1 day)

#### Step 4.1: Go to Partner Center

1. Login to https://partner.microsoft.com/
2. Go to **Commercial Marketplace**
3. Select **Office Add-ins**
4. Click **Create new submission**

#### Step 4.2: Fill Setup Information

**Product Setup:**
- Name: "UTM Thesis to LaTeX Converter"
- Publisher name: Your name/company
- Product category: "Productivity"
- Sub-category: "Utilities" or "Writing Assistants"

**Listing Details:**
- Summary: "Convert Word thesis to LaTeX"
- Full description: [Use text from Step 3.3]
- Keywords: [Use from Step 3.3]
- Privacy policy URL: https://your-domain.com/privacy-policy
- Support URL: https://your-domain.com/support
- Support email: support@your-domain.com
- License terms URL: https://your-domain.com/terms

#### Step 4.3: Upload Manifest

1. In Partner Center, click **Upload manifest**
2. Select your `manifest-production.xml` file
3. Wait for validation
4. Fix any errors if needed
5. Reupload if validation fails

#### Step 4.4: Upload Icons

1. Click **Add images**
2. Upload 3 icon sizes:
   - 96x96
   - 128x128
   - 194x194
3. Upload app logo (512x512)

#### Step 4.5: Upload Screenshots

1. Click **Add screenshots**
2. Upload 2-5 screenshots
3. Add captions for each
4. Make sure at least 1 screenshot shows main features

#### Step 4.6: Review and Submit

1. Review all information
2. Check for any errors
3. Click **Submit for review**
4. You'll get notification when review starts

### Phase 5: Review & Approval (3-5 days)

Microsoft will test:

✅ **Functionality**
- Add-in loads correctly
- All buttons work
- No crashes
- Features work as described

✅ **Security**
- No malware
- Secure HTTPS
- Safe code

✅ **Performance**
- Loads within 5 seconds
- Responsive
- No memory leaks

✅ **Compliance**
- Privacy policy present
- Terms present
- No prohibited content
- Accurate description

### Phase 6: Live! 🎉

Once approved:

1. Add-in appears on AppSource
2. Available in Office Store
3. Users can install directly from Word
4. Listed in search results
5. Can get reviews and ratings

## 📝 Complete Checklist

### Before Partner Registration
- [ ] Read AppStore policies
- [ ] Plan hosting solution
- [ ] Reserve domain name (if needed)

### Partner Center Setup
- [ ] Create Partner Center account
- [ ] Complete company verification
- [ ] Add payment method
- [ ] Wait for approval

### Technical Preparation
- [ ] Build production version
- [ ] Set up hosting
- [ ] Deploy to production URL
- [ ] Test all features on production URL
- [ ] Get SSL certificate
- [ ] Create icons (3 sizes)

### Store Assets
- [ ] Create 2-5 screenshots
- [ ] Write privacy policy
- [ ] Write terms of use
- [ ] Prepare store description
- [ ] Select keywords

### Manifest
- [ ] Update all URLs to production domain
- [ ] Validate manifest XML
- [ ] Check icon URLs
- [ ] Check all links work

### Final Submission
- [ ] Upload manifest
- [ ] Upload icons
- [ ] Upload screenshots
- [ ] Fill all store information
- [ ] Review everything
- [ ] Submit for review

## 🔄 Post-Approval

### Monitoring
- Check user reviews
- Monitor for issues
- Track downloads
- Read feedback

### Maintenance
- Fix bugs quickly
- Release updates regularly
- Improve based on feedback
- Keep documentation current

### Updates
1. Make changes in your code
2. Build and test
3. Deploy to production
4. Update version in manifest
5. Go to Partner Center
6. Create new submission
7. Submit updated manifest
8. Wait for approval (usually 1-2 days)

## 💡 Pro Tips

✅ **Do:**
- Make screenshots professional
- Write clear descriptions
- Test thoroughly before submission
- Respond quickly to feedback
- Monitor user reviews
- Update regularly
- Use clear icon design

❌ **Don't:**
- Upload without testing
- Use unclear descriptions
- Ignore Microsoft feedback
- Leave bad bugs
- Make false claims
- Use copyrighted images
- Disappear after publishing

## 📞 Support

If you need help:

1. **Microsoft Docs:** https://docs.microsoft.com/office/dev/store/
2. **AppSource Help:** https://appsource.microsoft.com/
3. **Partner Center Support:** Contact through Partner Center
4. **Community:** Stack Overflow tag: `office-js`

---

## 🎯 Next Steps

1. **Immediate:**
   - Choose hosting provider
   - Register domain (if needed)

2. **This Week:**
   - Create icons
   - Take screenshots
   - Write documentation

3. **Next Week:**
   - Deploy to production
   - Create Partner Center account
   - Prepare all store assets

4. **Week 3:**
   - Submit to AppStore
   - Wait for review

5. **Week 4:**
   - Get approved
   - Add-in goes live! 🎉

---

**Ready to make your add-in available to the world?**

Start with Step 1.1: Create Partner Center Account

I'm here to help if you get stuck! 😊
