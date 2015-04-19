'use strict';

var debug = require('debug')('Components:CoverTile');

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

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
        var coverSrc = `https://i.ytimg.com/vi/${this.props.video.get('youtubeId')}/mqdefault.jpg`;

        return (
            <a href="#">
                <div className="CoverTile active">
                    {this.props.video.get('isActive') ? <label className="WatchingLabel">Now Watching</label> : null}
                    <label className="DurationLabel">1:19</label>
                    <div className="CoverOverlay">
                        <span className="CoverViews">1300 views</span>
                        <p>Thoughts You Have While Thoughts You Have While</p>
                    </div>
                    <img src={coverSrc}/>
                </div>
            </a>
        );
    }
});

export default CoverTile;
