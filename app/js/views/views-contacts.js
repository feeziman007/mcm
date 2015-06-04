//CManager.Views.Contacts = Backbone.View.extend({
CManager.Views.Contacts = Marionette.CompositeView.extend({
    //template: _.template($('#tpl-contacts').html()),
    template: '#tpl-contacts',
    itemView: CManager.Views.Contact,
    itemViewContainer: '.contacts-container'
/*
    initialize: function() {
        //console.log('contacts initialized . . . ')
    }
*/

 /*   render: function() {
        var html = this.template()
        this.$el.html(html)

        this.collection.each(this.rendorOneContact, this)
        return this
    },

    rendorOneContact: function(modelContact) {
        var itemView = new CManager.Views.Contact({model: modelContact})
        this.$('.contacts-container').append(itemView.render().$el)
    }*/
})