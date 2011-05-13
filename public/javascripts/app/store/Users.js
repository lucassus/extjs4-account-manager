// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.Users', {
  extend: 'Ext.data.Store',

  model: 'AM.model.User',
  autoLoad: true,

  proxy: {
    type: 'rest',
    url: '/users',
    format: 'json',
    reader: {
      type: 'json',
      record: 'user'
    }
  }
});
