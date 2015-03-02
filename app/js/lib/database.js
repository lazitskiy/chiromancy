/**
 * Created by vas on 24.02.2015.
 */

var

    path = require('path'),
    Datastore = require('nedb'),
    Q = require('q'),
    fs = require('fs'),

    db = {},
// Load native UI library
    dataPath = require('nw.gui').App.dataPath;


App.dataPath = dataPath + '/data';

