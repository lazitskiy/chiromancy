/**
 * Created by vaso on 01.03.15.
 */

(function (App) {
    'use strict';


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

    /**
     * Напихаем планеты
     */
    var initDb = function () {
        var Planet = App.Collection.Planet;

        Planet.find()
            .then(function (data) {
                if (data.length != 10) {
                    Planet.truncate().then(function () {
                        Planet.insert([
                            {name: 'Солнце'},
                            {name: 'Меркурий'},
                            {name: 'Венера'},
                            {name: 'Земля'},
                            {name: 'Марс'},
                            {name: 'Юпитер'},
                            {name: 'Сатурн'},
                            {name: 'Уран'},
                            {name: 'Нептун'},
                            {name: 'Плутон'}
                        ])
                    })
                }
            });
    };


    var initApp = function () {
        App.start();
        var main_layout = new App.View.Layout();
        App.layout.show(main_layout);
    }


    initTemplates()
        .then(initDb)
        .then(initApp)
        .fail(function (err) {
            error(err);
            console.error(err);
        });
    ;

  //  App.start();
})(App);