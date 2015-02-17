'use strict';

var React = require('react');
var HeroStream = require('./HeroStream');
var Stream = require('./Stream');

var PageStream = React.createClass({
    render: function() {
        return (
            <div className="PageStream">
                <HeroStream/>
                <Stream/>
                <Stream/>
            </div>
        );
    }
});

module.exports = PageStream;
