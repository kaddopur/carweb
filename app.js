'use strict';

var Fluxible = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');

// create new fluxible instance
var app = new Fluxible({
    component: require('./components/Application.jsx')
});

// add routes to the routr plugin
app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

// register stores
app.registerStore(require('./stores/ApplicationStore'));

module.exports = app;
