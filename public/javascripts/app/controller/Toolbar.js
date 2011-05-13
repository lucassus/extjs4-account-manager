Ext.define('AM.controller.Toolbar', {
  extend: 'Ext.app.Controller',

  views: [
    'Toolbar'
  ],

  refs: [{
    ref: 'toolbar',
    selector: 'toolbar'
  }, {
    ref: 'userlist',
    selector: 'userlist'
  }],

  init: function() {
    this.control({
      'toolbar > button[action=addUser]': {
        click: function() {
          alert('Add User button clicked!');
        }
      },
      'toolbar > button[action=editUser]': {
        click: function() {
          var grid = this.getUserlist();
          var record = grid.getSelectionModel().getSelection()[0];

          this.getController('Users').editUser(grid, record);
        }
      },
      'toolbar > button[action=deleteUser]': {
        click: function() {
          alert('Delete User button clicked!');
        }
      }
    });
  }

});

