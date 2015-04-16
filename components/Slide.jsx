'use strict';

var React = require('react');

// components
var CoverTile = require('./CoverTile');

var Slide = React.createClass({
    render: function() {
        var coverTiles = this.props.videos.map((video, index) => {
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

export default Slide;
