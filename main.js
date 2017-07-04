const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = ('url');

// global reference to window object
let win;

function createWindow(){
    // create browser window
    win = new BrowserWindow({width:800, height:600});
    //win = new BrowserWindow({width:800, height:600, icon:});

    win.loadURL(url.format({
        pathname: path.join(__dir, 'index.html'),
        protocol: 'file',
        slashes: true 
    }));

    // open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

    // run create window function
    app.on('ready', createWindow);


    // quit when all windows are closed
    app.on('window-all-closed', ()=> {
        if(process.platform !== 'darwin'){
            app.quit();
        }
    });
}