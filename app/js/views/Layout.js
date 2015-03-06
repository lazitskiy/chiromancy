/**
 * Created by vaso on 01.03.15.
 */
(function (App) {
    'use strict';

    var Layout = Backbone.Marionette.LayoutView.extend({
        template: '#index_index',

        id: 'index_index',

        regions: {
            header: '#header',
            content: '#content',
            footer: '#footer'
        },

        initialize: function () {

        },

        onShow: function () {

            this.content.show(new App.View.Loading());
        }
    });

    App.View.Layout = Layout;
})(App);
