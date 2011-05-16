// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.Users', {
  extend: 'Ext.data.Store',

  model: 'AM.model.User',
  autoLoad: true,
  autoSync: true,

  proxy: {
    url: '/users',
    type: 'rest',
    format: 'json',

    reader: {
      type: 'json',
      record: 'user'
    },
    writer: {
      type: 'json',
      // wrap user params for Rails
      getRecordData: function(record) {
        return { user: record.data };
      }
    }
  }
});
