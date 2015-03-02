/**
 * Created by vas on 24.02.2015.
 */
(function (App) {
    'use strict';

    var Planet = _.extend(App.Model.Base, {

        idAttribute: 'planet_id',
        defaults: {
            name: 'Salat',
            created: 0
        },


        initialize: function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }

            this.on('change:name', this.notify, this);
        },


        notify: function () {
            console.log('name changed');
        }


    });

    App.Model.Planet = Planet;
})(App);
