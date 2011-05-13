Ext.define('AM.model.User', {
  extend: 'Ext.data.Model',
  fields: ['id', 'first_name', 'last_name', 'email'],

  proxy: {
    type: 'rest',
    url: '/users',
    format: 'json',
    reader: {
      type: 'json',
      root: 'users'
    }
  }
});
