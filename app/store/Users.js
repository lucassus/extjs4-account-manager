Ext.define('AM.store.Users', {
  extend: 'Ext.data.Store',

  model: 'AM.model.User',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: 'data/users.json',
    reader: {
      type: 'json',
      root: 'users',
      successProperty: 'success'
    }
  }
});
