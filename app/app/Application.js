/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('BookDoc.Application', {
    extend: 'Ext.app.Application',

    name: 'BookDoc',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
        var gui = require('nw.gui');
        var win = gui.Window.get();
        var tray;

        // tray management

        win.on('minimize', function() {
           this.hide();
           tray = new gui.Tray({icon: 'icon.png'});

           tray.on('click', function() {
             win.show();
             this.remove();
             tray = null;
          });
        });
    }
});
