/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BookDoc.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
      'BookDoc.view.listLanguage.ListLanguage'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
      {
        xtype: 'list-language-panel',
        region: 'west',
        width: 250,
        split: true
    },{
   //   xtype: 'panel',
   //   bind: {
   //        title: '{name}'
   //   },
   //   region: 'west',
   //   html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
   //   width: 250,
   //   split: true,
   //   tbar: [{
   //       xtype: 'textfield',
   //       name: 'searchField',
   //       emptyText: 'Search term',
   //       allowBlank: false
   //   },{
   //        text: 'Button',
   //        handler: 'onClickButton'
   //   }]
   //  },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    },{
      region: 'north',
      xtype: 'toolbar',
      height: 40,
      items: [
         {
            bind: {
               text: '{name} - test'
            }
         },
         {
            xtype: 'splitbutton',
            text: 'Split Button'
         },
         '->',
         {
            text: 'Preferences',
            handler: 'openPreferences'
         }
      ]


      // xtype: 'component',
      //cls: 'appBanner',
      //padding: 10,
      //height: 40,
      //bind: {
         // html: '{name} - A documenation app'
      // }
   }]
});
