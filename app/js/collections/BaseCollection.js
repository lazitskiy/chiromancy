/**
 * Created by vaso on 02.03.15.
 */
(function (App) {
    'use strict';

    var Base = Backbone.Collection.extend({}, {

        dataStore: function () {
            return new Datastore({
                filename: path.join(App.dataPath, this.modelName + '.db'),
                autoload: true
            });
        },

        insert: function (criteria) {
            var deferred = Q.defer();
            this.dataStore().insert(criteria, function (err, data) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(data)
                }
            });
            return deferred.promise;
        },


        find: function (criteria) {
            var deferred = Q.defer();
            this.dataStore().find(criteria, function (err, data) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(data)
                }
            });
            return deferred.promise;
        },


        findOne: function (criteria) {
            var deferred = Q.defer();

            this.dataStore().findOne(criteria, function (err, data) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(data)
                }
            });
            return deferred.promise;
        },


        remove: function (criteria) {
            var deferred = Q.defer();

            this.dataStore().remove(criteria, function (err, data) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(data)
                }
            });
            return deferred.promise;
        },

        truncate: function () {
            var deferred = Q.defer();

            fs.unlink(this.dataStore().filename, function (err) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve()
                }
            });
            return deferred.promise;
        }
    });


    App.Collection.Base = Base;


})(App);