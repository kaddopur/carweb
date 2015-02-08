'use strict';
var React = require('react');
var HeroVideo = require('./HeroVideo');
var CoverTile = require('./CoverTile');

var PageHome = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
            <div className="pure-g">
                <div className="pure-u-1 pure-u-sm-3-5 pure-u-lg-1-2">
                    <HeroVideo yid="SVgkNW2cENQ"/>
                </div>
                <div className="pure-u-1-2 pure-u-sm-1-5 pure-u-lg-1-6">
                    <CoverTile yid="SVgkNW2cENQ"/>
                    <CoverTile yid="q6f-LLM1H6U"/>
                    <CoverTile yid="SVgkNW2cENQ"/>
                </div>
                <div className="pure-u-1-2 pure-u-sm-1-5 pure-u-lg-1-6">
                    <CoverTile yid="SVgkNW2cENQ"/>
                    <CoverTile yid="q6f-LLM1H6U"/>
                    <CoverTile yid="SVgkNW2cENQ"/>
                </div>
            </div>
        );
    }
});

module.exports = PageHome;
