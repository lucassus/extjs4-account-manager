// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.Users', {
  extend: 'Ext.data.Store',

  model: 'AM.model.User',
  autoLoad: true,
  autoSync: false,

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
