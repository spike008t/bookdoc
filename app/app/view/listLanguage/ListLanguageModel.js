
Ext.define('BookDoc.view.listLanguage.ListLanguageModel', {
   extend: 'Ext.app.ViewModel',
   alias: 'viewmodel.listLanguage',

   data: {
      languages: [
         {
            name: 'nodejs'
         },
         {
            name: 'php'
         }
      ]
   }
});
