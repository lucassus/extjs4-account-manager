Ext.define('AM.view.Viewport', {
  extend: 'Ext.container.Viewport',

  layout: 'border',
  items: [{
    region: 'north',
    xtype: 'toolbar'
  },{
    region: 'center',
    xtype: 'userlist',
    title: 'Users',
    html : 'List of users will go here'
  }]
});
