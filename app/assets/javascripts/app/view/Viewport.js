Ext.define('AM.view.Viewport', {
  extend: 'Ext.container.Viewport',

  layout: 'fit',

  items: [{
    xtype: 'userlist',
    title: 'Users',
    html : 'List of users will go here'
  }]
});
