Ext.define('AM.controller.Toolbar', {
  extend: 'Ext.app.Controller',

  views: [
    'Toolbar'
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
      'toolbar > button[action=editUser]': {
        click: function() {
          alert('Edit User button clicked!');
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

