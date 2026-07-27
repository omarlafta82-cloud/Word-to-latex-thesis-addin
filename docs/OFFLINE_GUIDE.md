# Offline Mode Documentation

## 🔴 Offline Capabilities

The UTM Thesis to LaTeX Converter now works completely offline! Here's what you need to know:

## ✅ What Works Offline

### Core Functionality
- ✅ Convert Word documents to LaTeX
- ✅ Select university and degree type
- ✅ Enter thesis metadata
- ✅ Download .tex files
- ✅ Copy LaTeX to clipboard
- ✅ View conversion history

### Storage & History
- ✅ Save conversions locally using IndexedDB
- ✅ View all previous conversions
- ✅ Restore past conversions
- ✅ Delete individual conversions
- ✅ Clear conversion history

### UI Features
- ✅ Online/offline status indicator
- ✅ Real-time connection detection
- ✅ Automatic status updates

## 🔧 How It Works

### Service Worker

The add-in includes a Service Worker that:

1. **Caches Resources** - All UI, styles, and scripts are cached on first load
2. **Serves Offline** - When offline, cached resources are served
3. **Syncs on Reconnect** - Updates cache when online again
4. **Cache Strategy** - Uses "Cache First, Network Second" approach

```javascript
// Service Worker caches these files:
- taskpane.html
- commands.html
- manifest.xml
- All React components (compiled)
- All stylesheets
- JavaScript bundles
```

### IndexedDB Storage

Conversions are stored in browser's local database:

```typescript
interface StoredConversion {
  id: string;                    // Unique identifier
  timestamp: number;             // When it was created
  documentName: string;          // Original document name
  metadata: any;                 // Thesis information
  latexOutput: string;           // Generated LaTeX code
  university: string;            // University (utm, etc.)
  degreeType: string;            // PhD, Masters, Bachelor's
}
```

**Storage Limits:**
- Browser quota: 50MB+ (varies by browser)
- Can store hundreds of conversions
- Persists between sessions
- Survives browser restarts

### Offline Detector

Real-time connection monitoring:

```typescript
window.addEventListener('online', () => {
  // Update UI when coming online
  setIsOnline(true);
});

window.addEventListener('offline', () => {
  // Update UI when going offline
  setIsOnline(false);
});
```

## 🎨 UI Components

### OfflineIndicator

Shows current connection status:

```
🟢 Online       (green when connected)
🔴 Offline - Working Locally  (red when disconnected)
```

Features:
- Real-time status updates
- Visual pulse animation
- Color-coded for quick reference
- Always visible at top

### OfflineHistory

Manage saved conversions:

```
📜 Offline Conversions (5)
├─ Document 1 [Restore] [Delete]
├─ Document 2 [Restore] [Delete]
└─ Document 3 [Restore] [Delete]
```

Features:
- Lists all saved conversions
- Shows document info and date
- Quick restore button
- Delete individual items
- Clear all at once
- Expandable/collapsible

## 🚀 Usage Scenarios

### Scenario 1: WiFi Interruption

```
1. Typing thesis in Word
2. WiFi disconnects
3. Still see status: 🔴 Offline - Working Locally
4. Complete conversion
5. View result
6. WiFi reconnects
7. Status changes to: 🟢 Online
```

### Scenario 2: Working at Cafe

```
1. Sit down at cafe (no WiFi)
2. Open add-in
3. See cached version loads
4. Convert document offline
5. Saved to IndexedDB
6. Later at home, restore conversion
7. Download or make changes
```

### Scenario 3: Field Work

```
1. No internet at remote location
2. Add-in already cached
3. Work completely offline
4. All conversions saved locally
5. Return to office
6. WiFi available
7. Add-in syncs automatically
```

## 🔐 Data Privacy

### Local Storage Only
- No data sent to servers
- All conversions stay on your computer
- IndexedDB is browser storage (not cloud)
- Complete privacy

### Data Deletion
- Clear conversions anytime
- Browser cache can be cleared
- IndexedDB can be cleared
- No traces left

## ⚙️ Technical Details

### Service Worker Registration

```typescript
// Automatically registered on first load
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
```

### Cache Strategy

```
Fetch Request
    ↓
  Cache?
   ↙  ↘
 YES  NO
 ↓    ↓
Return  Try Network
Cached    ↓
Version  Success?
          ↙  ↘
        YES  NO
         ↓    ↓
       Return Return
       Data  Cached
            Version
```

### IndexedDB Operations

```typescript
// Save conversion
await offlineStorage.saveConversion(conversion);

// Get all conversions
const all = await offlineStorage.getAllConversions();

// Restore specific conversion
const conversion = await offlineStorage.getConversion(id);

// Delete conversion
await offlineStorage.deleteConversion(id);

// Get statistics
const stats = await offlineStorage.getStats();
```

## 🐛 Troubleshooting

### Service Worker Not Working

**Problem:** Add-in requires internet even after first load

**Solution:**
1. Check browser supports Service Workers (all modern browsers do)
2. Check HTTPS is used (required for Service Workers)
3. Clear browser cache
4. Restart Word
5. Check browser console for errors

### IndexedDB Not Working

**Problem:** Conversions not saving

**Solution:**
1. Check browser supports IndexedDB
2. Check browser storage is not full
3. Check privacy settings allow local storage
4. Check browser console for errors
5. Try clearing cache and reloading

### Offline Indicator Not Showing

**Problem:** Can't see online/offline status

**Solution:**
1. Ensure JavaScript is enabled
2. Check browser console for errors
3. Try reloading add-in
4. Check Word is up to date

## 🔄 Sync When Online

Once you go back online:

1. ✅ Service Worker updates cache
2. ✅ New templates available
3. ✅ Can access online features (future)
4. ✅ No manual sync needed

## 📊 Storage Statistics

View how much you've used:

```typescript
const stats = await offlineStorage.getStats();
console.log(stats.totalConversions);  // Number of saved conversions
console.log(stats.oldestConversion);  // Oldest date (timestamp)
console.log(stats.newestConversion);  // Newest date (timestamp)
```

## 🎯 Best Practices

✅ **Do:**
- Use offline mode for important work
- Regularly download .tex files
- Clear old conversions periodically
- Test connections after long offline periods

❌ **Don't:**
- Rely solely on local storage for permanent backups
- Ignore offline status indicator
- Clear browser data unexpectedly
- Share browser with others without clearing

## 🔮 Future Enhancements

- [ ] Cloud sync when online
- [ ] Backup/restore conversions
- [ ] Compression for storage
- [ ] Export history
- [ ] Offline template updates
- [ ] P2P sharing between users

## 📚 References

- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Offline Web Applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Office Add-in Offline Support](https://docs.microsoft.com/en-us/office/dev/add-ins/concepts/browsers-used-by-office-add-ins)

---

**Enjoy working offline! 🔴➡️🟢**
