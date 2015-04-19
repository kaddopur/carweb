'use strict';

var debug = require('debug')('Components:PageStream');

import React from 'react';
import Immutable from 'immutable';
import streamsConfig from '../configs/streams';

// components
import HeroStream from './HeroStream';
import Stream from './Stream';

var streamsMock = Immutable.fromJS({
    newest: {
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
        title: streamsConfig.reckless.title,
        videos: [
            {
                youtubeId: '5XYxuVYmR6A'
            },
            {
                youtubeId: 'lOGAI_lTyJI'
            },
            {
                youtubeId: 'qEYOyZVWlzs'
            }
        ]
    }
})

var HERO_STREAM_MOCK = {
    name: 'Car collision',
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
};

var PageStream = React.createClass({
    render() {
        debug('rendered');

        debug(streamsMock.get('newest'));

        return (
            <div className="PageStream">
                <HeroStream {...HERO_STREAM_MOCK}
                    heroYoutubeId={this.props.route.params.heroYoutubeId}
                    name={streamsConfig[this.props.route.params.streamName].title} />
                <Stream/>
                <Stream/>
            </div>
        );
    }
});

export default PageStream;
