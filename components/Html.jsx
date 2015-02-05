'use strict';
var React = require('react');

var Html = React.createClass({
    render: function() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="text/css" href="public/css/common.css" />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/client.js" defer></script>
            </html>
        );
    }
});

module.exports = Html;
