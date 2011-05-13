Ext.define('AM.model.User', {
  extend: 'Ext.data.Model',
  fields: ['name', 'email'],

  proxy: {
    type: 'rest',
    url: 'data/users.json',
    reader: {
      type: 'json',
      root: 'users'
    }
  }
});
