/**
 * Created by vaso on 01.03.15.
 */

(function (App) {
    'use strict';

    var Planet = App.Collection.Base.extend({

        model: App.Model.Planet

    }, {
        modelName: 'planet'

    });


    App.Collection.Planet = Planet;
})(App);