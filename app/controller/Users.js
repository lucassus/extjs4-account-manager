Ext.define('AM.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  models: ['User'],

  views: [
    'user.List',
    'user.Edit'
  ],

  init: function() {
    this.control({
      'viewport > panel': {
        render: this.onPanelRendered
      },
      'userlist': {
        itemdblclick: this.editUser
      },
      'useredit button[action=save]': {
        click: this.updateUser
      }
    });
  },

  onPanelRendered: function() {
    console.log('The panel was rendered');
  },

  editUser: function(grid, record) {
    console.log("Double clicked on " + record.get('name'));

    var view = Ext.widget('useredit');
    view.down('form').loadRecord(record);
  },

  updateUser: function(button) {
    console.log('Clicked the Save button');

    var win = button.up('window');
    var form = win.down('form');
    var record = form.getRecord();
    var values = form.getValues();

    record.set(values);
    win.close();
    this.getUsersStore().sync();
  }

});

