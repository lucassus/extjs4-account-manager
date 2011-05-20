// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.Users', {
  extend: 'Ext.data.Store',

  model: 'AM.model.User',
  autoLoad: true,
  autoSync: false,

  proxy: {
    url: '/users',
    type: 'rest',
    format: 'json',

    reader: {
      type: 'json',
      root: 'users',
      record: 'user',
      successProperty: 'success',
      idProperty: 'id'
    },
    writer: {
      type: 'json',
      // wrap user params for Rails
      getRecordData: function(record) {
        return { user: record.data };
      }
    }
  },

  listeners: {
    load: function() {
      console.log(arguments);
    },
    update: function() {
      console.log(arguments);
    },
    beforesync: function() {
      console.log(arguments);
    }
  }
});
