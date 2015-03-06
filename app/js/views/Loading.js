/**
 * Created by vaso on 03.03.15.
 */

(function (App) {
    'use strict';

    var Loading = Backbone.Marionette.ItemView.extend({
        template: '#loading',
        className: 'loading-container',

        ui: {
            loadingStatus: '.loading-status',
            loadingBar: '#loadingbar-contents',
            waitingBlock: '#waiting-block'
        },

        events: {
            'click .fixApp': 'fixApp'
        },

        initialize: function () {
            info('Loading DB. Loading');
        },

        onShow: function () {
            this.ui.loadingBar.animate({
                width: '25%'
            }, 100, 'swing');
            this.ui.loadingStatus.text('sosite pisu');
        },

        fixApp: function () {
            alert('fixApp')
        }

    });

    App.View.Loading = Loading;
})(App)