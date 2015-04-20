'use strict';

import React from 'react';

// mixins
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';

// actions
import readStreams from '../actions/readStreams';

// components
import HeroStream from './HeroStream';
import Stream from './Stream';

// stores
import StreamStore from '../stores/StreamStore';

var PageStream = React.createClass({
    mixins: [ ImmutableMixin, FluxibleMixin ],

    statics: {
        storeListeners: [ StreamStore ]
    },

    getStateOnChange () {
        if (!this.state) {
            this.executeAction(readStreams);
        }

        return {
            streams: this.getStore(StreamStore).getStreams()
        };
    },

    render () {
        var route = this.props.route;
        var streamName = route.getIn(['params', 'streamName']);
        var heroYoutubeId = route.getIn(['params', 'heroYoutubeId']);
        var heroStream = this.state.streams.get(streamName);
        var normalStream = this.state.streams.filter(stream => stream.get('name') !== streamName);

        var streamComponents = normalStream.toArray().map(stream => {
            return <Stream key={stream.get('name')} stream={stream} />
        });

        return (
            <div className="PageStream" key={this.props.route.get('url')}>
                <HeroStream
                    stream={heroStream}
                    heroYoutubeId={heroYoutubeId} />
                {streamComponents}
            </div>
        );
    }
});

export default PageStream;
