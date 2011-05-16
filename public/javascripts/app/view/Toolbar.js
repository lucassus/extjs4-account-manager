Ext.define('AM.view.Toolbar', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.usertoolbar',

  initComponent: function() {
    this.addUserButton = new Ext.Button({
      text: 'Add User',
      action: 'addUser'
    });

    this.editUserButton = new Ext.Button({
      text: 'Edit user',
      action: 'editUser',
      disabled: true
    });

    this.deleteUserButton = new Ext.Button({
      text: 'Delete User',
      action: 'deleteUser',
      disabled: true
    });

    this.items = [this.addUserButton, this.editUserButton, this.deleteUserButton],

    this.callParent(arguments);
  },

  enableRecordRelatedButtons: function() {
    this.editUserButton.enable();
    this.deleteUserButton.enable();
  },

  disableRecordRelatedButtons: function() {
    this.editUserButton.disable();
    this.deleteUserButton.disable();
  }
});
