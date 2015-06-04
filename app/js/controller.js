CManager.Controller = Marionette.Controller.extend({
    initialize: function(options) {
        this._contacts = options.contacts;
        this._router = options.router;
        this._mainRegion = options.mainRegion;
    },

    home: function() {
        this._router.navigate('contacts', {
            trigger: true,
            replace: true
        });
    },

    showContacts: function() {
        var contactsView = new CManager.Views.Contacts({
            collection: this._contacts
        });

        CManager.mainRegion.show(contactsView);
    }
})

