#!/bin/bash
# Deploy to GitHub Pages
# This script builds and deploys your add-in to GitHub Pages

echo "🚀 Deploying UTM Thesis Converter to GitHub Pages..."

# Configuration
GITHUB_USER="omarlafta82-cloud"
REPO_NAME="word-to-latex-thesis-addin"
GH_PAGES_BRANCH="gh-pages"

# Build
echo "📦 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Copy manifest and other files
echo "📋 Copying static files..."
cp manifest.xml dist/
cp public/taskpane.html dist/
cp public/commands.html dist/
cp public/service-worker.js dist/

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main

# Enable GitHub Pages
echo ""
echo "✅ Ready for GitHub Pages!"
echo ""
echo "Next steps:"
echo "1. Go to GitHub repository settings"
echo "2. Under 'Pages', select 'Deploy from branch'"
echo "3. Select 'main' branch and '/dist' folder"
echo "4. Save"
echo "5. Your site will be at: https://$GITHUB_USER.github.io/$REPO_NAME"
echo ""
echo "For custom domain:"
echo "1. Add CNAME file with your domain"
echo "2. Update DNS records"
echo "3. Update manifest.xml with custom domain"
