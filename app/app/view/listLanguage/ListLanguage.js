Ext.define('BookDoc.view.listLanguage.ListLanguage', {
   extend: 'Ext.panel.Panel',

   requires: [
      'BookDoc.view.listLanguage.ListLanguageController',
      'BookDoc.view.listLanguage.ListLanguageModel'
   ],

   xtype: 'list-language-panel',

   controller: 'listLanguage',

   viewModel: {
      type: 'listLanguage'
   },

   html: 'test',

   tbar: [
      {
         xtype: 'textfield',
         name: 'searchField',
         emptyText: 'Search term',
         allowBlank: false
      },{
          text: 'Button'
      }
   ]
});
