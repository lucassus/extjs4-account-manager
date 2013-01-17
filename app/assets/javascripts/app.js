/**
 *= require_self
 */

// create a new instance of Application class
Ext.application({
  // the global namespace
  name: 'AM',

  appFolder: '/assets/app',

  controllers: ['Users'],

  autoCreateViewport: true
});
