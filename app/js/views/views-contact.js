//CManager.Views.Contact = Backbone.View.extend({
CManager.Views.Contact = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'media col-md-6 col-lg-4',
    //template: _.template($('#tpl-contact').html()),
    template: '#tpl-contact'

/*
    initialize: function() {
        //console.log('contact initialized . . . ')
        //this.listenTo(this.model, 'remove', this.remove);
    },

    render: function() {
        var html = this.template(this.model.toJSON())
        this.$el.append(html)
        return this
    }
*/
})