/**
 *= require_self
 */

// Set valid ExtJS loading path (/vendor/assets/extjs4/src)
Ext.Loader.setPath('Ext', '/assets/extjs4/src');

// create a new instance of Application class
Ext.application({
  // the global namespace
  name: 'AM',

  appFolder: '/assets/app',

  controllers: ['Users'],

  autoCreateViewport: true,
});
