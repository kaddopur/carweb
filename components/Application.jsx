'use strict';
var React = require('react/addons');
var NavMenu = require('./NavMenu.jsx');
var Home = require('./Home.jsx');
var About = require('./About.jsx');
var ApplicationStore = require('../stores/ApplicationStore');
var RouterMixin = require('flux-router-component').RouterMixin;
var FluxibleMixin = require('fluxible').Mixin;
var cx = React.addons.classSet;

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function () {
        return this.getState();
    },
    getState: function () {
        var appStore = this.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            route: appStore.getCurrentRoute(),
            pages: appStore.getPages(),
            ui: {
                openNavMenu: false
            }
        };
    },
    onChange: function () {
        this.setState(this.getState());
    },
    handleToggleNavMenu: function () {
        this.setState({
            ui: {
                openNavMenu: !this.state.ui.openNavMenu
            }
        });
    },
    render: function () {
        var output = '';
        switch (this.state.currentPageName) {
            case 'home':
                output = <Home/>;
                break;
            case 'about':
                output = <About/>;
                break;
        }

        var menuLinkClass = cx({
            'menu-link': true,
            'active': this.state.ui.openNavMenu 
        });

        var layoutClass = cx({
            'active': this.state.ui.openNavMenu
        });

        return (
            <div id="layout" className={layoutClass}>
                <a href="#menu" id="menuLink" className={menuLinkClass} onClick={this.handleToggleNavMenu}>
                    <span></span>
                </a>

                <NavMenu selected={this.state.currentPageName} links={this.state.pages} ui={this.state.ui}/>

                <div id="main">{output}</div>
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

module.exports = Application;
