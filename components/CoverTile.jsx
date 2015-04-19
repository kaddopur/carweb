'use strict';

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

// components
import { NavLink } from 'flux-router-component';

var CoverTile = React.createClass({
    mixins: [ ImmutableMixin ],
    getDefaultProps() {
        return {
            video: Immutable.fromJS({
                isActive: false,
                watchingLabel: 'Now Watching',
                durationLabel: '1:19',
                views: 1300,
                caption: 'Thoughts You Have While Thoughts You Have While',
                youtubeId: '5XYxuVYmR6A'
            })
        };
    },
    render() {
        var youtubeId = this.props.video.get('youtubeId');
        var coverSrc = `https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`;

        return (
            <NavLink href={`/stream/${this.props.streamName}/${youtubeId}`}>
                <div className="CoverTile active">
                    {this.props.video.get('isActive') ? <label className="WatchingLabel">Now Watching</label> : null}
                    <label className="DurationLabel">1:19</label>
                    <div className="CoverOverlay">
                        <span className="CoverViews">1300 views</span>
                        <p>Thoughts You Have While Thoughts You Have While</p>
                    </div>
                    <img src={coverSrc}/>
                </div>
            </NavLink>
        );
    }
});

export default CoverTile;
