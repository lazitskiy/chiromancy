/**
 * Created by vas on 24.02.2015.
 */

var App = new Backbone.Marionette.Application();

_.extend(App, {
    Controller: {},
    Model: {},
    Collection: {},
    View: {}
});

App.addRegions({
    header: '#header',
    nav: '#nav',
    index: '#index',
    footer: '#footer'
});

App.on('start', function () {

    var index = new App.View.Index();
    App.index.show(index);

});