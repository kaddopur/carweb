'use strict';

var loadPage = require('../actions/loadPage');

module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'stream',
        title: 'Home',
        action: loadPage
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
