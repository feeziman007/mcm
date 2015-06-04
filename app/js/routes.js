CManager.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'index': 'home',
        'contacts': 'showContacts'
    }
})