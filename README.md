#### pselectrfunda
######7 Start
```
npm install electron-prebuilt -D
```
######8 start
```
electron.BrowserWindow //UI
electron.app //app
```
######10 Try
```
const ipc = electron.ipcRenderer
ipc.send('customname')
```
main module: listen
```
const ipc = electrion.ipcMain
ipc.on('customname',_=>)
```

css flex
```
.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
```
