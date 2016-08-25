const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow

let mainWindow
app.on('ready',_=>{
	mainWindow = new BrowserWindow({
		height:200,
		width:200
	})

	mainWindow.loadURL(`file://${__dirname}/ke.html`)

	mainWindow.on('closed', _=>{
		mainWindow = null;
	})
})