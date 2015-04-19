'use strict';

var debug = require('debug')('Components:NavMenu');

import _ from 'lodash';
import React from 'react';

// components
import { NavLink } from 'flux-router-component';
import classNames from 'classnames';
import streamsConfig from '../configs/streams'

var NavMenu = React.createClass({
    propTypes: {
        route: React.PropTypes.object.isRequired
    },

    isActiveLink(streamItem) {
        return _.startsWith(this.props.route.url, streamItem.path) ||
               this.props.route.url == streamItem.alias;
    },

    render() {
        var links = Object.keys(streamsConfig).map((key, index) => {
            var listClass = classNames({
                'active': this.isActiveLink(streamsConfig[key])
            });

            return (
                <li className={listClass} key={index}>
                    <NavLink href={streamsConfig[key].path}>{streamsConfig[key].title}</NavLink>
                </li>
            );
        }, this);

        return (
            <div className="NavMenu">
                <NavLink href="/" className="Logo"></NavLink>
                <ul>{links}</ul>
            </div>
        );
    }
});

export default NavMenu;
