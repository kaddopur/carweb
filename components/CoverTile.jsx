'use strict';

var React = require('react');

var CoverTile = React.createClass({
    propTypes: {
        youtubeId: React.PropTypes.string.isRequired
    },
    getDefaultProps() {
        return {
            isActive: false,
            watchingLabel: 'Now Watching',
            durationLabel: '1:19',
            views: 1300,
            caption: 'Thoughts You Have While Thoughts You Have While',
            youtubeId: '5XYxuVYmR6A'
        };
    },
    render() {
        var coverSrc = `https://i.ytimg.com/vi/${this.props.youtubeId}/mqdefault.jpg`;
        return (
            <a href="#">
                <div className="CoverTile active">
                    {this.props.isActive ? <label className="WatchingLabel">{this.props.watchingLabel}</label> : null}
                    <label className="DurationLabel">{this.props.durationLabel}</label>
                    <div className="CoverOverlay">
                        <span className="CoverViews">{this.props.views} views</span>
                        <p>{this.props.caption}</p>
                    </div>
                    <img src={coverSrc}/>
                </div>
            </a>
        );
    }
});

export default CoverTile;
