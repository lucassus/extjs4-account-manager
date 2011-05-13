Ext.define('AM.model.User', {
  extend: 'Ext.data.Model',
  fields: ['first_name', 'last_name', 'email'],

  proxy: {
    type: 'rest',
    url: '/users.json',
    reader: {
      type: 'json',
      root: 'users'
    }
  }
});
