'use strict';

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

// components
import CoverTile from './CoverTile';

var HeroSlide = React.createClass({
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

        return (
            <div className="HeroSlide">
                {coverTiles}
            </div>
        );
    }
});

export default HeroSlide;
