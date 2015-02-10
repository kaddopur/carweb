'use strict';

var React = require('react');

var CoverTile = React.createClass({
    render: function() {
        var imageSrc = "http://img.youtube.com/vi/" + this.props.yid + "/mqdefault.jpg";
        return (
            <img className="pure-img Bd-t" src={imageSrc}/>
        );
    }
});

module.exports = CoverTile;
