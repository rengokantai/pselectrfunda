const electron = require('electron');

const countdown = require('./countdown');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

let mainWindow

const windows = [];
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


ipc.on('countdown-start', _=>{
	countdown(count=>{
		mainWindow.webContents.send('countdown',count)
	})
})