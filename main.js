const { app, session, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');

let reactDevToolsPath = os.homedir();
    switch(process.platform) {
        case 'linux':
            reactDevToolsPath = path.join(reactDevToolsPath, "/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.18.0_0/");
    }

function createWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    setTimeout(() => {
        window.loadURL('http://localhost:8080');
    }, 2000);
}

app.whenReady().then(async () => {
    
    await session.defaultSession.loadExtension(reactDevToolsPath);
    
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    
    if (process.platform !== 'darwin') app.quit();
  })