'use strict';

var loadPage = require('../actions/loadPage');

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'stream',
        title: 'Home',
        action: loadPage,
        params: {
            streamName: 'newest'
        }
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        action: loadPage
    },
    stream: {
        path: '/stream/:streamName',
        method: 'get',
        page: 'stream',
        title: 'stream',
        action: loadPage
    },
    streamWithHero: {
        path: '/stream/:streamName/:heroYoutubeId',
        method: 'get',
        page: 'stream',
        title: 'stream',
        action: loadPage
    }
};
