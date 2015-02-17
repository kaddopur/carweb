'use strict';

var React = require('react');
var CoverTile = require('./CoverTile');

var Stream = React.createClass({
    render: function() {
        return (
            <div className="Stream">
                <h2 className="StreamTitle">Community</h2>
                <div className="Slide">
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                </div>
                <span className="NavButton Left"></span>
                <span className="NavButton Right"></span>
            </div>
        );
    }
});

module.exports = Stream;
