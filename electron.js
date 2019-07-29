const path = require('path');
const { BrowserWindow, app } = require('electron');

function foxwin()
{
    const window = new BrowserWindow({
        autoHideMenuBar: true,
    });

    //window.loadURL("http://localhost:3000")
    window.loadURL(path.join(__dirname, '/../build/index.html'));
};

app.on('ready', ky => {
    foxwin();
});