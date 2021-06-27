const electron = require('electron')
const path = require('path')
// アプリケーションをコントロールするモジュール
const app = electron.app
// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow
let mainWindow
app.on('window-all-closed', function() {
	app.quit()
})

function createWindow() {
    const frame = false
	const frameTitle = 'hidden'
	const arg = {
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,
        },
        width: 300,
        height: 100,
        titleBarStyle: frameTitle,
        frame: frame,
    }
    mainWindow = new BrowserWindow(arg)
    mainWindow.loadURL('https://isolittlify.netlify.app')
    mainWindow.center()
    mainWindow.setAlwaysOnTop(true)
    mainWindow.webContents.on('did-finish-load', function() {
        console.log('loaded')
        mainWindow.webContents.insertCSS('.jucket-column{-webkit-app-region: drag !important;}body,html{font-size:0.8rem;} .controller-column{ display:none !important;}')
   });
}
// Electronの初期化完了後に実行
app.on('ready', createWindow)

