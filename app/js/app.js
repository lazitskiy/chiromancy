/**
 * Created by vas on 24.02.2015.
 */

var

    path = require('path'),
    Datastore = require('nedb'),
    Q = require('q'),
    fs = require('fs'),
    gui = require('nw.gui'),
    i18n = require('i18n'),

    win = gui.Window.get(),


    db = {},
// Load native UI library
    dataPath = require('nw.gui').App.dataPath;

window.log = console.log.bind(console);

window.debug = function () {
    console.debug.apply(console, arguments);
};

window.info = function () {
    console.info.apply(console, arguments);
};

window.warn = function () {
    console.warn.apply(console, arguments);
};
window.error = function () {
    console.error.apply(console, arguments);
};

var App = new Backbone.Marionette.Application();


_.extend(App, {
    Controller: {},
    Model: {},
    Collection: {},
    View: {},
    Localization: {}
});

App.addRegions({
    layout: '.main-window-region'
});

App.on('start', function () {



});