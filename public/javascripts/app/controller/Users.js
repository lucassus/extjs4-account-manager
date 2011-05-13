Ext.define('AM.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  models: ['User'],

  views: [
    'Toolbar',
    'user.List',
    'user.Edit'
  ],

  refs: [{
    ref: 'toolbar',
    selector: 'toolbar'
  }],

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
        selectionchange: this.selectionChange
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
  },

  selectionChange: function(grid, selections) {
    console.log('User list selection changed.');
    var toolbar = this.getToolbar();

    if (selections.length > 0) {
      console.log('Enable button');
      toolbar.enableDeleteButton();
    } else {
      console.log('Disable button');
      toolbar.disableDeleteButton();
    }
  }

});

