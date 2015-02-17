'use strict';

var React = require('react');
var CoverTile = require('./CoverTile');

var HeroStream = React.createClass({
    render: function() {
        return (
            <div className="HeroStream">
                <h2 className="StreamTitle">Now Watching</h2>
                <div className="HeroVideo">
                    <img src="http://placehold.it/560x315" alt=""/>
                </div>
                <div className="HeroSlide">
                    <CoverTile isActive={true} />
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                </div>
                <div className="HeroNavButtonContainer">
                    <span className="NavButton Left"></span>
                    <span className="NavButton Right"></span>
                </div>
            </div>
        );
    }
});

module.exports = HeroStream;
