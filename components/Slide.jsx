'use strict';
var debug = require('debug')('Components:Slide');

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

// components
import CoverTile from './CoverTile';

var Slide = React.createClass({
    mixins: [ ImmutableMixin ],
    getDefaultProps() {
        return {
            videos: Immutable.List()
        };
    },
    render() {
        var videos = this.props.videos.toArray();
        var coverTiles = videos.map((video, index) => {
            return (
                <CoverTile streamName={this.props.streamName} video={video} key={index} />
            );
        });

        debug(videos);
        return (
            <div className="Slide">
                {coverTiles}
            </div>
        );
    }
});

export default Slide;
