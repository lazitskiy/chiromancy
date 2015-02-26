/**
 * Created by vas on 24.02.2015.
 */

var

    path = require('path'),
    Datastore = require('nedb'),
    Q = require('q'),

    db = {},
// Load native UI library
    dataPath = require('nw.gui').App.dataPath

    ;


db.planet = new Datastore({
    filename: path.join(dataPath, 'data/planet.db'),
    autoload: true
});

(new Q).den