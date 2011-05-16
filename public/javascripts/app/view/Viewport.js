Ext.define('AM.view.Viewport', {
  extend: 'Ext.container.Viewport',

  layout: 'border',
  items: [{
    region: 'north',
    xtype: 'usertoolbar'
  }, {
    region: 'center',
    xtype: 'userlist',
    title: 'Users',
    html : 'List of users will go here'
  }]
});
