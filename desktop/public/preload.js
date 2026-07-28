const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  saveFileDialog: () => ipcRenderer.invoke('save-file-dialog'),
  saveFile: (filePath, content) => ipcRenderer.invoke('save-file', filePath, content),
  showNotification: (options) => ipcRenderer.invoke('show-notification', options),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
});
