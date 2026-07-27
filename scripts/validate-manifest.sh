#!/bin/bash
# Validate manifest before submission
# Checks for common issues that cause AppStore rejection

echo "🔍 Validating manifest.xml..."
echo ""

MANIFEST_FILE="manifest-production.xml"

# Check if file exists
if [ ! -f "$MANIFEST_FILE" ]; then
    echo "❌ manifest-production.xml not found!"
    exit 1
fi

# Validate XML syntax
echo "✓ Checking XML syntax..."
if ! xmllint --noout "$MANIFEST_FILE" 2>/dev/null; then
    echo "❌ Invalid XML syntax in manifest!"
    xmllint "$MANIFEST_FILE"
    exit 1
fi

echo "✅ XML syntax valid"

# Check required fields
echo "✓ Checking required fields..."

CHECKS=(
    "Id"
    "Version"
    "DisplayName"
    "Description"
    "SourceLocation"
)

for check in "${CHECKS[@]}"; do
    if ! grep -q "<$check" "$MANIFEST_FILE"; then
        echo "❌ Missing required field: $check"
        exit 1
    fi
    echo "  ✅ $check found"
done

# Check for localhost URLs (should not be in production)
echo "✓ Checking for production URLs..."
if grep -q "localhost" "$MANIFEST_FILE"; then
    echo "⚠️  WARNING: localhost found in manifest!"
    echo "    Make sure you're using manifest-production.xml"
    echo "    Update all localhost URLs to your production domain"
fi

# Check HTTPS
echo "✓ Checking for HTTPS..."
if grep -q 'DefaultValue="http://' "$MANIFEST_FILE"; then
    echo "❌ Non-HTTPS URL found! AppStore requires HTTPS."
    exit 1
fi

echo "✅ All URLs use HTTPS"

# Check icon URLs
echo "✓ Checking icon URLs..."
if ! grep -q 'icon-16.png\|icon-32.png\|icon-80.png' "$MANIFEST_FILE"; then
    echo "⚠️  WARNING: Icon URLs not found. Make sure they're included."
fi

# Validate version format
echo "✓ Checking version format..."
VERSION=$(grep '<Version>' "$MANIFEST_FILE" | sed 's/.*<Version>\([^<]*\).*/\1/')
if [[ ! $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "⚠️  WARNING: Version format should be X.Y.Z (e.g., 1.0.0)"
    echo "    Current version: $VERSION"
fi

echo ""
echo "✅ Manifest validation complete!"
echo ""
echo "Before submission:"
echo "1. ✓ Update all URLs to production domain"
echo "2. ✓ Upload icons to production server"
echo "3. ✓ Test manifest URL in browser"
echo "4. ✓ Add-in should load in Word from production URL"
echo ""
