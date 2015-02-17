'use strict';

var React = require('react');

var Stream = React.createClass({
    render: function() {
        return (
            <div className="Stream">
                <h2 className="StreamTitle">Community</h2>
                <div className="Slide">
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
                    <div className="CoverTile"><img src="http://placehold.it/320x180"/></div>
                </div>
                <span className="NavButton Left"></span>
                <span className="NavButton Right"></span>
            </div>
        );
    }
});

module.exports = Stream;
