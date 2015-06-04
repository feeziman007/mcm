var CManager = {
    data: function() {
        return [
            {
                id: '1',
                name: 'Allan Border',
                address: 'Heir Street, Surrey Hills, NSW 2000',
                email: 'allan.border@cricket.com.au'
            },
            {
                id: '2',
                name: 'Steve Waugh',
                address: 'Heir Street, Surrey Hills, VIC 2000',
                email: 'steve.waugh@cricket.com.au'
            },
            {
                id: '3',
                name: 'Ricky Ponting',
                address: 'Heir Street, Surrey Hills, QLD 2000',
                email: 'ricky.ponting@cricket.com.au'
            },
            {
                id: '4',
                name: 'Michael Clark',
                address: 'Heir Street, Surrey Hills, ADL 2000',
                email: 'michael.clark@cricket.com.au'
            },
            {
                id: '5',
                name: 'Shane Watson',
                address: 'Heir Street, Surrey Hills, TAS 2000',
                email: 'shane.watson@cricket.com.au'
            }
        ]
    },
    Models: {},
    Views: {},
    Collections: {},
    KickOff: function() {
        var contacts = new CManager.Collections.Contacts(this.data())
            , router = new CManager.Router()

        router.on('route:home', function() {
            router.navigate('contacts', {
                trigger: true,
                replace: true
            });
        })

        router.on('route:showContacts', function() {
            var contactView = new CManager.Views.Contacts({
                collection: contacts
            })

            $('.main-container').html(contactView.render().$el)
        })

        Backbone.history.start()
    }
}



var CManager = new Marionette.Application({
    Models: {},
    Collections: {},
    Views: {}
})

CManager.addRegions({
     mainRegion: '.main-container'
})

var mainRegion = new Marionette.Region({
    el: ".main-container"
});


CManager.addInitializer(function(data) {
    var contacts = new CManager.Collections.Contacts(this.data())
        , router = new CManager.Router()

    router.on('route:home', function() {
        router.navigate('contacts', {
            trigger: true,
            replace: true
        });
    })

    router.on('route:showContacts', function() {
        var contactsView = new CManager.Views.Contacts({
            collection: contacts
        })

        CManager.mainRegion.show(contactsView);
    })

})

MyApp.on('initialize:after', function(options){
    if (Backbone.history){
        Backbone.history.start();
    }
});