CManager.Models.Contact = Backbone.Model.extend({
    defaults: {
        id: '',
        name: '',
        address: '',
        email: ''
    },
    initialize: function() {
        this.set('avatar', 'app/img/faces/' + _.random(1, 15) + '.jpg')
    }
})