'use strict';

var React = require('react');

var HeroStream = React.createClass({
    render: function() {
        return (
            <div className="HeroStream">
                <h2 className="StreamTitle">Now Watching</h2>
                <div className="HeroVideo">
                    <img src="http://placehold.it/560x315" alt=""/>
                </div>
                <div className="HeroSlide">
                    <a href="#">
                        <div className="CoverTile active">
                            <label className="WatchingLabel">Now Watching</label>
                            <label className="DurationLabel">1:19</label>
                            <div className="CoverOverlay">
                                <span>1,300 views</span>
                                <p>Thoughts You Have While Thoughts You Have While</p>
                            </div>
                            <img src="http://placehold.it/320x180"/>
                        </div>
                    </a>
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
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
