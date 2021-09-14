const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadURL('http://localhost:8080');
}

app.whenReady().then(() => {
    let reactDevToolsPath;

    if (process.platform === 'linux') {
        reactDevToolsPath = "/home/.config/google-chrome/Default/Extensions";
    }

    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    
    if (process.platform !== 'darwin') app.quit();
  })