'use strict';

var debug = require('debug')('Components:PageStream');

import React from 'react';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';
import streamsConfig from '../configs/streams';

// components
import HeroStream from './HeroStream';
import Stream from './Stream';

var streamsMock = Immutable.fromJS({
    newest: {
        name: streamsConfig.newest.name,
        title: streamsConfig.newest.title,
        videos: [
            {
                youtubeId: '5XYxuVYmR6A'
            },
            {
                youtubeId: 'lOGAI_lTyJI'
            },
            {
                youtubeId: 'dFf4AgBNR1E'
            },
            {
                youtubeId: 'teMdjJ3w9iM'
            },
            {
                youtubeId: 'qEYOyZVWlzs'
            }
        ]
    },
    reported: {
        name: streamsConfig.reported.name,
        title: streamsConfig.reported.title,
        videos: [
            {
                youtubeId: '5XYxuVYmR6A'
            },
            {
                youtubeId: 'lOGAI_lTyJI'
            }
        ]
    },
    reckless: {
        name: streamsConfig.reckless.name,
        title: streamsConfig.reckless.title,
        videos: [
            {
                youtubeId: 'dFf4AgBNR1E'
            },
            {
                youtubeId: 'teMdjJ3w9iM'
            },
            {
                youtubeId: 'qEYOyZVWlzs'
            }
        ]
    },
    exid: {
        name: streamsConfig.exid.name,
        title: streamsConfig.exid.title,
        videos: [
            {
                youtubeId: 'OTyJkMK8m_o'
            },
            {
                youtubeId: 'ws5Jvmonq-w'
            },
            {
                youtubeId: 'NNxerm8EdPo'
            },
            {
                youtubeId: 'hfXZ6ydgZyo'
            },
            {
                youtubeId: 'egqDPipqIAg'
            }
        ]
    },
    redVelvet: {
        name: streamsConfig.redVelvet.name,
        title: streamsConfig.redVelvet.title,
        videos: [
            {
                youtubeId: 'JFgv8bKfxEs'
            },
            {
                youtubeId: 'QpAn9ryoB4Y'
            },
            {
                youtubeId: 'glXgSSOKlls'
            },
            {
                youtubeId: 'px2Q47O0_eE'
            }
        ]
    },
    lovelyz: {
        name: streamsConfig.lovelyz.name,
        title: streamsConfig.lovelyz.title,
        videos: [
            {
                youtubeId: 'Mn0ToZ9ki3Q'
            },
            {
                youtubeId: 'Bfejxue4vMs'
            }
        ]
    }
});

var PageStream = React.createClass({
    mixins: [ ImmutableMixin ],
    render() {
        var route = this.props.route;
        var streamName = route.getIn(['params', 'streamName']);
        var heroYoutubeId = route.getIn(['params', 'heroYoutubeId']);
        var heroStream = streamsMock.get(streamName);

        var normalStream = streamsMock.filter(stream => stream.get('name') !== streamName);

        var streamComponents = normalStream.toArray().map((stream, index) => {
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
