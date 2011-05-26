Ext.define('AM.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  models: ['User'],

  views: [
    'user.List',
    'user.Form'
  ],

  refs: [{
    ref: 'list',
    selector: 'userlist'
  }],

  init: function() {
    this.control({
      'userlist': {
        itemdblclick: this.editUser,
        selectionchange: this.selectionChange
      },
      'userform button[action=save]': {
        click: this.updateUser
      },
      'button[action=addUser]': {
        click: function() {
          var view = Ext.widget('userform');
          view.show();
        }
      },
      'button[action=editUser]': {
        click: function() {
          var grid = this.getList();
          var record = grid.getSelectedUser();

          this.getController('Users').editUser(grid, record);
        }
      },
      'button[action=deleteUser]': {
        click: function() {
          var grid = this.getList();
          var record = grid.getSelectedUser();

          if (record) {
            var store = this.getUsersStore();
            store.remove(record);
            store.sync();
          }
        }
      }
    });
  },

  editUser: function(grid, record) {
    var view = Ext.widget('userform'); // create an user form widget instance
    view.down('form').loadRecord(record);
  },

  updateUser: function(button) {
    var win = button.up('window');
    var form = win.down('form');

    var store = this.getUsersStore();
    var record = form.getRecord();
    var values = form.getValues();

    if (record) { // perform update
      record.set(values);
    } else { // perform create
      store.add(values);
    }

    store.sync();
    win.close();
  },

  selectionChange: function(selectionModel, selections) {
    var grid = this.getList();

    if (selections.length > 0) {
      grid.enableRecordRelatedButtons();
    } else {
      grid.disableRecordRelatedButtons();
    }
  }

});

