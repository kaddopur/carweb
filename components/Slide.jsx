'use strict';

var React = require('react');
var CoverTile = require('./CoverTile');

var Slide = React.createClass({
    render: function() {
        var coverTiles = this.props.videos.map(function renderCoverTiles(video, index) {
            return (
                <CoverTile {...video} key={index}/>
            );
        });
        return (
            <div className="Slide">
                {coverTiles}
            </div>
        );
    }
});

module.exports = Slide;
