# Video Tutorial Scripts - UTM Thesis Converter

## 📹 Complete Video Tutorial Series

This document contains scripts and guides for creating video tutorials for the UTM Thesis Converter application.

---

# VIDEO 1: Installation & Setup (5 minutes)

## Title: "How to Build UTM Thesis Converter - Complete Setup Guide"

### Script:

**[0:00-0:30] Opening**
```
Title on screen: "UTM Thesis Converter - Build Setup"
Background music: Upbeat, professional

Narration: "Welcome to the UTM Thesis Converter build tutorial!
 In this video, we'll show you how to download Node.js and set up 
 everything you need to build the application."
```

**[0:30-1:30] Part 1: Download Node.js**
```
Show on screen: Go to nodejs.org

Narration: "First, visit nodejs.org. 
 You'll see two versions: LTS and Current.
 LTS stands for Long Term Support - this is what we want.
 Click the LTS button to download it."

Show: Clicking LTS button, file downloading

Narration: "The download will start. It's about 150MB, 
 so it might take a minute or two depending on your internet."

Show: Download progress
```

**[1:30-2:30] Part 2: Install Node.js**
```
Show: Running the installer

Narration: "Once downloaded, double-click the installer.
 Follow the installation wizard.
 Just click 'Next' for all the default options.
 This is important: check the box for 'npm' - 
 it should be checked by default."

Show: Clicking through installer screens
Highlight: npm checkbox

Narration: "Click 'Install' and wait for it to complete.
 This might take a couple minutes."

Show: Installation progress bar
```

**[2:30-3:30] Part 3: Restart Computer**
```
Show: Installation complete screen

Narration: "When installation finishes, 
 IMPORTANT: Restart your computer.
 This ensures Node.js is properly configured.
 Don't skip this step!"

Show: Restart dialog

Narration: "After restart, open Command Prompt.
 On Windows, press Win+R, type 'cmd', press Enter."

Show: Opening Command Prompt
```

**[3:30-4:30] Part 4: Verify Installation**
```
Show: Command Prompt window

Narration: "Now let's verify Node.js is installed correctly.
 Type: node --version
 Press Enter."

Show: Typing command
Show: Output like "v18.16.0"

Narration: "You should see a version number.
 If you see this, Node.js is installed correctly!
 Next, type: npm --version
 Press Enter."

Show: Typing npm --version
Show: Output like "9.6.7"

Narration: "Perfect! Both Node.js and npm are ready.
 You're all set for the next step."
```

**[4:30-5:00] Closing**
```
Title: "Next: Clone Repository"
Subtitle: "Watch Video 2 for the next steps"

Narration: "In the next video, we'll clone the repository 
 and run the build script. See you next!"
```

---

# VIDEO 2: Clone Repository (4 minutes)

## Title: "Step 2: Clone the Repository"

### Script:

**[0:00-0:30] Opening**
```
Title: "Cloning the Repository"

Narration: "Welcome back! Now that you have Node.js installed,
 let's clone the repository and get ready to build."
```

**[0:30-1:30] Part 1: Navigate to Downloads**
```
Show: Desktop

Narration: "Open Command Prompt again.
 First, we'll navigate to a good location.
 I recommend your Downloads folder.
 Type: cd Downloads
 Press Enter."

Show: Typing command in Command Prompt
Show: Directory changes
```

**[1:30-2:30] Part 2: Clone Repository**
```
Show: Command Prompt with Downloads directory

Narration: "Now we'll clone the repository.
 This downloads all the project files.
 Copy this command and paste it in Command Prompt:"

Show on screen: 
```
git clone https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin.git
```

Narration: "Paste it and press Enter.
 This will create a folder with all the project files.
 It might take a minute or two."

Show: Cloning process with progress
```

**[2:30-3:30] Part 3: Navigate to Project**
```
Show: Cloning complete

Narration: "When it finishes, type:
 cd word-to-latex-thesis-addin
 Press Enter."

Show: Typing command
Show: Directory changes

Narration: "Now let's check what's inside.
 Type: dir
 Press Enter."

Show: Directory listing

Narration: "You should see several folders and files,
 including 'build-windows.bat' - that's what we'll use next."
```

**[3:30-4:00] Closing**
```
Title: "Next: Run Build Script"

Narration: "Perfect! You're all set up.
 In the next video, we'll run the build script
 and create your .exe file. See you there!"
```

---

# VIDEO 3: Run Build Script (10 minutes)

## Title: "Step 3: Build Your Application (.exe Creation)"

### Script:

**[0:00-0:30] Opening**
```
Title: "Building Your Application"

Narration: "Welcome to the final step!
 Now we're going to build your executable (.exe file).
 This is where the magic happens!
 The entire process takes about 15-20 minutes,
 so grab a coffee and let's get started."
```

**[0:30-1:30] Part 1: Run Build Script**
```
Show: Command Prompt in project directory

Narration: "Make sure you're in the project directory
 (where you see 'build-windows.bat').
 Now type:
 build-windows.bat
 Press Enter."

Show: Typing command
Show: Script starting to run

Narration: "The build script will now start.
 You'll see several status messages as it progresses.
 Don't close this window!
 It's working behind the scenes."
```

**[1:30-3:00] Part 2: Installing Dependencies**
```
Show: Script output
Highlight: "Installing dependencies" message

Narration: "The first step is installing dependencies.
 This downloads necessary packages from npm.
 It might take 5-10 minutes depending on your internet.
 You'll see lots of text - this is normal!
 Just wait and let it work."

Show: Progress of npm install (fast-forward if needed)

Narration: "All those packages are being downloaded and configured.
 This only happens the first time.
 Next builds will be much faster."
```

**[3:00-4:30] Part 3: Building React App**
```
Show: Script output
Highlight: "Building React application" message

Narration: "Next, it compiles your React application.
 This optimizes all the code for the final product.
 You might see some warnings - these are okay.
 Warnings don't stop the build."

Show: Compilation progress

Narration: "React is being bundled and optimized.
 This creates small, fast files for the final application.
 We're getting close!"
```

**[4:30-7:00] Part 4: Building Installer**
```
Show: Script output
Highlight: "Creating Windows installer" message

Narration: "Now comes the exciting part!
 The script is creating your Windows installer.
 This bundles everything into an .exe file.
 This step takes about 5 minutes.
 You'll see several status messages as it works."

Show: Installer creation progress

Narration: "Electron Builder is creating:
 - The application package
 - The installer executable
 - All necessary resources
 
 Everything is being packaged into a professional
 installer just like commercial software."

Show: Progress messages
```

**[7:00-9:00] Part 5: Build Complete**
```
Show: SUCCESS message

Narration: "And we're done! 
 The script shows:
 'SUCCESS! Your .exe files are ready!'
 
 You've successfully built your application!
 The process took about 15-20 minutes.
 
 Let me show you where your files are located."

Show: Showing file path in Command Prompt

Narration: "Navigate to: desktop\\dist\
 
 Open Windows Explorer (File Manager).
 Go to Downloads (or wherever you cloned it).
 Open word-to-latex-thesis-addin.
 Open the desktop folder.
 Open the dist folder.
 
 Inside, you'll find your .exe files!"

Show: File explorer opening folders
Show: dist folder with .exe files
Highlight: UTM-Thesis-Converter-Setup.exe

Narration: "There are two files:
 
 1. 'UTM-Thesis-Converter-Setup.exe' - Full installer
 2. 'UTM-Thesis-Converter portable.exe' - Portable version
 
 The Setup.exe is what you want to share or install.
 Double-click it to install on your computer."
```

**[9:00-10:00] Closing**
```
Title: "Success! You Built Your Application!"

Show: .exe file being double-clicked
Show: Installation process starting

Narration: "Congratulations! You've successfully built 
 the UTM Thesis Converter!
 
 You now have a professional Windows application.
 
 In the next video, we'll show you how to use it.
 Double-click the .exe to install it on your computer.
 
 That's it! You're done with the technical stuff.
 Now comes the fun part - using your application!
 
 Thanks for watching! See you in the next video!"

Background music: Upbeat outro
Title: "Video 4: How to Use the Application"
```

---

# VIDEO 4: How to Use the Application (8 minutes)

## Title: "How to Use UTM Thesis Converter - Complete Tutorial"

### Script:

**[0:00-0:30] Opening**
```
Title: "Using UTM Thesis Converter"

Narration: "Welcome! Now that you have the application installed,
 let's learn how to use it to convert your thesis.
 In this video, I'll show you step by step."
```

**[0:30-1:30] Part 1: Launch Application**
```
Show: Windows desktop

Narration: "To launch the application,
 you can either:
 1. Click the icon on your desktop
 2. Find it in the Start Menu
 3. Search for 'UTM Thesis Converter'
 
 Let's click the desktop icon."

Show: Double-clicking icon
Show: Application starting (splash screen)

Narration: "The application is starting.
 You'll see the splash screen briefly.
 Then the main window will open."

Show: Application window opening
```

**[1:30-2:30] Part 2: Upload File**
```
Show: Main application window
Show: Drop zone area

Narration: "The application shows a large upload area.
 You can either:
 1. Drag and drop your Word file here
 2. Click to browse and select a file
 
 Let's drag and drop our thesis file."

Show: Dragging .docx file onto the drop zone
Show: File being accepted

Narration: "Great! The file is accepted.
 Make sure it's a .docx or .doc file.
 The application will now move to the next screen."
```

**[2:30-5:00] Part 3: Fill Thesis Information**
```
Show: Metadata form

Narration: "Now you'll see the thesis information form.
 Let's fill it out step by step.
 
 First field: Thesis Title
 Enter your complete thesis title here."

Show: Typing in title field
Example: "Machine Learning Applications in Healthcare"

Narration: "Next: Author Name
 Enter your full name."

Show: Typing author name

Narration: "Next: Graduation Year
 Enter your graduation year."

Show: Typing year

Narration: "Next: Degree Type
 Select PhD, Master's, or Bachelor's."

Show: Clicking dropdown
Show: Selecting PhD

Narration: "Next: Faculty
 Enter your faculty or department."

Show: Typing faculty

Narration: "Next: Supervisor Name
 Enter your main supervisor's name."

Show: Typing supervisor name

Narration: "Optional: Co-Supervisor
 If you have a co-supervisor, enter their name.
 Otherwise, leave it blank."

Show: Optional field (empty)

Narration: "Perfect! All required fields are filled.
 Now click 'Convert to LaTeX' button.
 This will start the conversion process."

Show: Clicking Convert button
Show: Loading screen

Narration: "The application is now converting your document.
 This usually takes 5-10 seconds.
 The conversion process:
 1. Reads your Word document
 2. Extracts the text and structure
 3. Converts to LaTeX format
 4. Applies UTM template
 
 Almost done!"
```

**[5:00-7:00] Part 4: Download or Copy**
```
Show: LaTeX preview screen

Narration: "Excellent! Your LaTeX code is ready!
 You can see a preview of the generated LaTeX.
 Now you have three options:
 
 Option 1: Download as .tex file
 Click 'Download .tex File'
 The file will save to your Downloads folder.
 
 Option 2: Copy to Clipboard
 Click 'Copy to Clipboard'
 Then paste it into your LaTeX editor.
 
 Option 3: Convert Another
 Click to upload and convert a different document."

Show: Clicking "Download .tex File" button
Show: File save dialog
Show: Choosing location
Show: File saved message

Narration: "Great! Your .tex file is saved.
 You can now take this file and use it with
 a LaTeX template.
 
 Popular options:
 - Overleaf.com (online LaTeX editor)
 - Local LaTeX installation
 - Any LaTeX editor of your choice.
 
 Your .tex file follows UTM standards,
 so it's compatible with UTM thesis templates."
```

**[7:00-8:00] Closing**
```
Title: "Tips & Tricks"

Narration: "Here are some tips for best results:
 
 1. Make sure your Word document is well-formatted
 2. Use Heading 1, Heading 2, etc. for structure
 3. Insert images and tables in the document
 4. The conversion works best with English documents
 
 You've now learned:
 - How to build the application
 - How to use it to convert your thesis
 
 Congratulations! Happy thesis writing!"

Background music: Upbeat outro
Title: "Thank you for watching!"
End: "Subscribe for more tutorials"
```

---

# VIDEO 5: Troubleshooting (6 minutes)

## Title: "Common Issues & Solutions"

### Script:

**[0:00-0:30] Opening**
```
Title: "Troubleshooting Guide"

Narration: "Running into issues?
 Don't worry! In this video, we'll solve common problems."
```

**[0:30-1:30] Issue 1: Node.js Not Recognized**
```
Show: Command Prompt error

Narration: "Problem: 'node is not recognized'
 
 Solution:
 1. Close Command Prompt
 2. Restart your computer
 3. Open Command Prompt again
 4. Type: node --version
 
 If it still doesn't work:
 - Go back to nodejs.org
 - Reinstall Node.js
 - Make sure npm is checked during installation"
```

**[1:30-2:30] Issue 2: Build Takes Too Long**
```
Show: Build progress

Narration: "Problem: Build is taking forever!
 
 This is actually normal:
 - First build: 15-20 minutes
 - Includes downloading 200+ packages
 - Internet speed matters
 
 Just wait! It will complete.
 Next builds will be much faster (5-10 minutes)."
```

**[2:30-3:30] Issue 3: Disk Space Error**
```
Show: Disk space error

Narration: "Problem: 'Not enough disk space'
 
 Solution:
 1. Free up at least 1GB
 2. Delete large files you don't need
 3. Delete old browser downloads
 4. Or try building on a different drive
 
 The build needs:
 - 500MB for dependencies
 - 500MB for build output
 - 1GB recommended total"
```

**[3:30-4:30] Issue 4: Installer Won't Run**
```
Show: .exe file

Narration: "Problem: .exe file won't open
 
 Solution:
 1. Right-click the .exe
 2. Select 'Run as Administrator'
 3. Click 'Yes' if prompted
 
 Or:
 1. Disable antivirus temporarily
 2. Try running the installer
 3. Re-enable antivirus
 
 Some antivirus programs can block installers."
```

**[4:30-5:30] Issue 5: Application Crashes**
```
Show: Crash error

Narration: "Problem: Application crashes on startup
 
 Solution:
 1. Restart your computer
 2. Uninstall the application
 3. Reinstall from the .exe
 4. Try again
 
 If crashes continue:
 1. Rebuild the application
 2. Make sure Node.js is up to date
 3. Check you have Windows 7 or newer"
```

**[5:30-6:00] Closing**
```
Title: "Need More Help?"

Narration: "Still having issues?
 
 Check the documentation:
 - BUILD_GUIDE.md
 - docs/DESKTOP_APP_GUIDE.md
 
 Or visit:
 - GitHub Issues page
 - Our documentation website
 
 Thanks for watching!"
```

---

# 🎬 Recording Instructions

## Software Recommendations

### FREE Options:
- **OBS Studio** (obs-project.com) - Most popular, open source
- **Camtasia Lite** - Easy to use
- **ScreenFlow** (macOS) - Simple and effective

### PAID Options:
- **Camtasia** - Professional screen recording
- **Adobe Captivate** - Professional course creation
- **Snagit** - Quick and easy

## Recording Tips

1. **Clean Desktop**
   - Close unnecessary windows
   - Disable notifications
   - Hide sensitive information

2. **Screen Resolution**
   - Use 1920x1080 or higher
   - Zoom text if needed (125% or 150%)

3. **Mouse Cursor**
   - Make cursor larger and more visible
   - Enable cursor highlighting on click

4. **Audio**
   - Use external microphone
   - Speak clearly and slow enough
   - Record in quiet environment

5. **Editing**
   - Speed up long waits
   - Add captions for important steps
   - Add background music
   - Use transitions sparingly

## Publishing

### Upload to YouTube
1. Create YouTube channel (if needed)
2. Upload videos
3. Add titles, descriptions, tags
4. Create playlist for series

### Video Details
- **Title**: Clear and descriptive
- **Description**: Include timestamps and links
- **Tags**: utm, latex, thesis, converter, windows
- **Playlist**: "UTM Thesis Converter Tutorial"

### Example Description:
```
UTM Thesis Converter - Step 1: Installation Guide

In this video, we show you how to:
✓ Download Node.js
✓ Install Node.js
✓ Verify installation
✓ Prepare for building

Timestamps:
0:00 - Introduction
0:30 - Download Node.js
1:30 - Install Node.js
2:30 - Restart Computer
3:30 - Verify Installation
4:30 - Closing

Next video: Step 2 - Clone Repository

Project:
https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin

Documentation:
BUILD_GUIDE.md
DESKTOP_APP_GUIDE.md

#UTMThesisConverter #LaTeX #Tutorial
```

---

# 📋 Video Series Summary

| Video | Title | Length | Topics |
|-------|-------|--------|--------|
| 1 | Installation & Setup | 5 min | Download Node.js, Install, Verify |
| 2 | Clone Repository | 4 min | Clone from GitHub |
| 3 | Build Application | 10 min | Run build script, Wait, Verify |
| 4 | How to Use | 8 min | Upload, Fill form, Download |
| 5 | Troubleshooting | 6 min | Common issues & solutions |
| **TOTAL** | **Complete Tutorial** | **33 minutes** | **Full process** |

---

**Happy recording! 🎬**
