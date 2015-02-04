'use strict';

require('node-jsx').install({extension: '.jsx'});
var express = require('express');
var serialize = require('serialize-javascript');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var debug = require('debug')('cardian');
var React = require('react');
var app = require('./app');
var HtmlComponent = React.createFactory(require('./components/Html'));
var navigateAction = require('flux-router-component').navigateAction;

var server = express();
server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

server.use(function (req, res, next) {
    var context = app.createContext({
        req: req,
        xhrContext: {
            _csrf: req.csrfToken()
        }
    });

    context.executeAction(navigateAction, {url: req.url, type: 'pageload'}, function (err) {

        if (err) {
            if (err.status && err.status === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

        debug('Rendering Application component into html');
        var AppComponent = app.getAppComponent();
        React.withContext(context.getComponentContext(), function () {
            var html = React.renderToStaticMarkup(HtmlComponent({
                state: exposed,
                markup: React.renderToString(AppComponent({
                    context: context.getComponentContext()
                }))
            }));
            
            debug('Sending markup');
            res.write(html);
            res.end();
        });
    });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Cardian is listening on port ' + port);
