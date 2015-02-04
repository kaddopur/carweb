'use strict';

var React = require('react');
var debug = require('debug')('cardian');
var app = require('./app');
var dehydratedState = window.App;

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    var mountNode = document.getElementById('app');

    React.withContext(context.getComponentContext(), function () {
        React.render(app.getAppComponent()(), mountNode);
    });
});
