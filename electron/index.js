const { app, BrowserWindow } = require('electron');

let janela_principal;

app.on('ready', () => {
    
    janela_principal = new BrowserWindow({
        height: 1920, width: 1280
    });

    janela_principal.loadURL(`file://${__dirname}//index.html`);

});