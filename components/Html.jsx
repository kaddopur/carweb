'use strict';

import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';

var Html = React.createClass({
    mixins: [ FluxibleMixin ],
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href="/public/css/page_stream.css" />
                <link rel="stylesheet" href="/public/css/animation.css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/main.js"></script>
            </html>
        );
    }
});

export default Html;
