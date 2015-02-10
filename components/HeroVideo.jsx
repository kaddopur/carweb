'use strict';

var React = require('react');

var HeroVideo = React.createClass({
    render: function() {
        var videoSrc = 'https://www.youtube.com/embed/' + this.props.yid;
        return (
            <div className="videoWrapper Bd-t">
                <iframe width="560" height="315" src={videoSrc}  frameBorder="0" allowFullScreen/>
            </div>
        );
    }
});

module.exports = HeroVideo;
