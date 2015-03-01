/**
 * Created by vaso on 01.03.15.
 */

(function (App) {
    'use strict';

    window.log = function () {
        return console.log.apply(console, arguments);
    };

    window.debug = function () {
        return console.debug.apply(console, arguments);
    };

    // load templates into index.html
    var initTemplates = function () {
        var ts = [];
        _.each(document.querySelectorAll('[type="text/x-template"]'), function (el) {
            var d = Q.defer();
            $.get(el.src, function (res) {
                el.innerHTML = res;
                d.resolve(true);
            });
            ts.push(d.promise);
        });
        return Q.all(ts);
    };


    var initApp = function () {
        App.start();
    }


    initTemplates()
        .then(initApp);


})(App);