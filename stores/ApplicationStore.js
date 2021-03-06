'use strict';

import _ from 'lodash';
import createStore from 'fluxible/addons/createStore';
import routesConfig from '../configs/routes';

var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: {
        'CHANGE_ROUTE_SUCCESS': 'handleNavigate'
    },
    initialize () {
        this.currentPageName = null;
        this.currentPage = null;
        this.currentRoute = null;
        this.pages = routesConfig;
        this.pageTitle = '';
    },
    handleNavigate(route) {
        if (this.currentRoute && (this.currentRoute.url === route.url)) {
            return;
        }

        var pageName = route.config.page;
        var page = this.pages[pageName];

        // params overwrite from config
        route.params = _.merge(route.params, route.config.params);

        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        this.emitChange();
    },
    getCurrentPageName() {
        return this.currentPageName;
    },
    getPageTitle() {
        return this.pageTitle;
    },
    getCurrentRoute() {
        return this.currentRoute;
    },
    getPages() {
        return this.pages;
    },
    dehydrate() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.currentRoute,
            pageTitle: this.pageTitle
        };
    },
    rehydrate(state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.currentRoute = state.route;
        this.pageTitle = state.pageTitle;
    }
});

export default ApplicationStore;
