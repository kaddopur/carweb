'use strict';

var React = require('react');

var CoverTile = React.createClass({
    propTypes: {
        coverSrc: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            isActive: false,
            watchingLabel: 'Now Watching',
            durationLabel: '1:19',
            views: 1300,
            caption: 'Thoughts You Have While Thoughts You Have While',
            coverSrc: 'http://placehold.it/320x180'
        };
    },
    render: function() {
        return (
            <a href="#">
                <div className="CoverTile active">
                    {this.props.isActive ? <label className="WatchingLabel">{this.props.watchingLabel}</label> : null}
                    <label className="DurationLabel">{this.props.durationLabel}</label>
                    <div className="CoverOverlay">
                        <span className="CoverViews">{this.props.views} views</span>
                        <p>{this.props.caption}</p>
                    </div>
                    <img src={this.props.coverSrc}/>
                </div>
            </a>
        );
    }
});

module.exports = CoverTile;
