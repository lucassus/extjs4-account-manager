Ext.define('AM.view.user.List' ,{
  extend: 'Ext.grid.Panel',
  alias : 'widget.userlist',

  title : 'All Users',
  store: 'Users',

  initComponent: function() {
    this.columns = [
      { header: 'First Name',  dataIndex: 'first_name',  flex: 1 },
      { header: 'Last Name',  dataIndex: 'last_name',  flex: 1 },
      { header: 'Email', dataIndex: 'email', flex: 1 }
    ];

    this.callParent(arguments);
  }
});
