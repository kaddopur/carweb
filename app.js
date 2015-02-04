'use strict';

var React = require('react');
var Fluxible = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');

var app = new Fluxible({
    appComponent: React.createFactory(require('./components/HelloApp.jsx'))
});

app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

module.exports = app;
