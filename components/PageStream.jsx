'use strict';

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

// components
import HeroStream from './HeroStream';
import Stream from './Stream';

var streamsMock = Immutable.Map();

var PageStream = React.createClass({
    mixins: [ ImmutableMixin ],
    render() {
        var route = this.props.route;
        var streamName = route.getIn(['params', 'streamName']);
        var heroYoutubeId = route.getIn(['params', 'heroYoutubeId']);
        var heroStream = streamsMock.get(streamName);

        var normalStream = streamsMock.filter(stream => stream.get('name') !== streamName);

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
