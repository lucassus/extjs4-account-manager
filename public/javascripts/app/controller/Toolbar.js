Ext.define('AM.controller.Toolbar', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  views: ['Toolbar'],

  refs: [{
    ref: 'toolbar',
    selector: 'usertoolbar'
  }, {
    ref: 'userlist',
    selector: 'userlist'
  }],

  init: function() {
    this.control({
      'toolbar > button[action=addUser]': {
        click: function() {
          var view = Ext.widget('userform');
          view.show();
        }
      },
      'toolbar > button[action=editUser]': {
        click: function() {
          var grid = this.getUserlist();
          var record = grid.getSelectedUser();

          this.getController('Users').editUser(grid, record);
        }
      },
      'toolbar > button[action=deleteUser]': {
        click: function() {
          var grid = this.getUserlist();
          var record = grid.getSelectedUser();

          if (record) {
            var store = this.getUsersStore();
            store.remove(record);
          }
        }
      }
    });
  }

});

