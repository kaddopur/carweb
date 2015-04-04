'use strict';

var React = require('react');

var HeroVideo = React.createClass({
    getDefaultProps: function() {
        return {
            youtubeId: 'bw9CALKOvAI',
            shouldAutoplay: false,
            startAt: ''
        };
    },
    render: function() {
        var youtubeSrc = 'https://www.youtube.com/embed/' + this.props.youtubeId;

        if (this.props.shouldAutoplay) {
            youtubeSrc += '?autoplay=1';
        }

        return (
            <div className="HeroVideo">
                <iframe width="560" height="315" src={youtubeSrc} frameBorder="0" allowFullScreen/>
            </div>
        );
    }
});

module.exports = HeroVideo;
