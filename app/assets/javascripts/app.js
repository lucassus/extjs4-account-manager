/**
 *= require_self
 */

// Set valid ExtJS loading path (/vendor/assets/extjs4/src)
Ext.Loader.setPath('Ext', '/assets/extjs4/src');

Ext.application({ // create a new instance of Application class
  name: 'AM', // the global namespace

  appFolder: '/assets/app',

  controllers: ['Users']
});
