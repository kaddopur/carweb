'use strict';

import { createImmutableStore } from 'fluxible-immutable-utils';
import streamsConfig from '../configs/streams';

var StreamStore = createImmutableStore({
    storeName: 'StreamStore',

    handlers: {
        READ_STREAMS_SUCCESS: '_onReadStreams'
    },

    getStreams () {
        return this._state.get('streams');
    },

    _onReadStreams () {
        this.setState({
            streams: {
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
            }
        });
    }
});

export default StreamStore;
