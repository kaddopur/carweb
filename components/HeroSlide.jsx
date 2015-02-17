'use strict';

var React = require('react');
var CoverTile = require('./CoverTile');

var HeroSlide = React.createClass({
    render: function() {
        var coverTiles = this.props.videos.map(function renderCoverTiles(video, index) {
            return (
                <CoverTile {...video} key={index}/>
            );
        });
        return (
            <div className="HeroSlide">
                {coverTiles}
            </div>
        );
    }
});

module.exports = HeroSlide;
