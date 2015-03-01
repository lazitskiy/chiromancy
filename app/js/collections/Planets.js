/**
 * Created by vaso on 01.03.15.
 */

(function (App) {
    'use strict';

    var Planets = Backbone.Collection.Extends({

        model: App.Model.Planet

    });


    App.Collection.Planets = Planets;
})(App);