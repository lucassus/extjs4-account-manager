Ext.define('AM.view.Toolbar', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.toolbar',

  initComponent: function() {
    this.addUserButton = new Ext.Button({
      text: 'Add User',
      action: 'addUser'
    });

    this.deleteUserButton = new Ext.Button({
      text: 'Delete User',
      action: 'deleteUser',
      disabled: true
    });

    this.items = [this.addUserButton, this.deleteUserButton],

    this.callParent(arguments);
  },

  enableDeleteButton: function() {
    this.deleteUserButton.enable();
  },

  disableDeleteButton: function() {
    this.deleteUserButton.disable();
  }
});
