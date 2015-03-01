/**
 * Created by vaso on 01.03.15.
 */
(function (App) {
    'use strict';

    var Index = Backbone.Marionette.ItemView.extend({
        template: '#index_index',

        initialize: function () {

        }
    });

    App.View.Index = Index;
})(App);
