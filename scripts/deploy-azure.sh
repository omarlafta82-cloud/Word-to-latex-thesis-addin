#!/bin/bash
# Deploy to Azure Static Web App
# This script builds and deploys your add-in to Azure

# Configuration
RESOURCE_GROUP="utm-thesis-converter-rg"
APP_NAME="utm-thesis-converter"
REGION="eastus"

echo "🚀 Deploying UTM Thesis Converter to Azure..."

# Build
echo "📦 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy using Azure CLI
echo "📤 Deploying to Azure..."
az staticwebapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --source . \
    --location $REGION \
    --build-folder dist

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your app is live at: https://$APP_NAME.azurestaticapps.net"
    echo ""
    echo "Next steps:"
    echo "1. Update manifest.xml with your Azure URL"
    echo "2. Submit to Microsoft AppStore"
else
    echo "❌ Deployment failed!"
    exit 1
fi
