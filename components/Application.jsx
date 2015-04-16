/* global document */

'use strict';

var React = require('react/addons');
var ApplicationStore = require('../stores/ApplicationStore');
var RouterMixin = require('flux-router-component').RouterMixin;
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');

// components
var NavMenu = require('./NavMenu.jsx');
var PageStream = require('./PageStream.jsx');
var About = require('./About.jsx');

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState() {
        return this.getState();
    },
    getState() {
        var appStore = this.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            route: appStore.getCurrentRoute(),
            pages: appStore.getPages()
        };
    },
    onChange() {
        this.setState(this.getState());
    },
    render() {
        var output = '';
        switch (this.state.currentPageName) {
            case 'stream':
            case 'streamWithHero':
                output = <PageStream route={this.state.route}/>;
                break;
            case 'about':
                output = <About/>;
                break;
        }

        return (
            <div>
                <NavMenu/>
                {output}
            </div>
        );
    },
    componentDidUpdate(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

export default Application;
