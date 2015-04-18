/* global document */

'use strict';

import React from 'react/addons';
import ApplicationStore from '../stores/ApplicationStore';
import { RouterMixin } from 'flux-router-component';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';

// components
import NavMenu from './NavMenu.jsx';
import PageStream from './PageStream.jsx';
import About from './About.jsx';

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
                <NavMenu route={this.state.route} />
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
