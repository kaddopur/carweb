'use strict';

import React from 'react';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

var HeroVideo = React.createClass({
    mixins: [ ImmutableMixin ],
    getDefaultProps() {
        return {
            shouldAutoplay: false,
            startAt: ''
        };
    },
    render() {
        var youtubeSrc = `https://www.youtube.com/embed/${this.props.video.get('youtubeId')}`;

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

export default HeroVideo;
