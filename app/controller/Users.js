Ext.define('AM.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  models: ['User'],

  views: [
    'Toolbar',
    'user.List',
    'user.Edit'
  ],

  init: function() {
    this.control({
      'toolbar > button[action=addUser]': {
        click: function() {
          alert('Add User button clicked!');
        }
      },
      'toolbar > button[action=deleteUser]': {
        click: function() {
          alert('Delete User button clicked!');
        }
      },
      'viewport > panel': {
        render: this.onPanelRendered
      },
      'userlist': {
        itemdblclick: this.editUser,
        selectionchange: function(grid, selections) {
          var toolbar = Ext.widget('toolbar');

          if (selections.length > 0) {
            toolbar.enableDeleteButton();
          } else {
            toolbar.disableDeleteButton();
          }
        }
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

