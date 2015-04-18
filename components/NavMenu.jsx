'use strict';

import React from 'react';

// components
import { NavLink } from 'flux-router-component';
import classNames from 'classnames';
import streams from '../configs/streams'

var NavMenu = React.createClass({
    propTypes: {
        route: React.PropTypes.object.isRequired
    },

    isActiveLink(streamItem) {
        return this.props.route.url === streamItem.path ||
               this.props.route.url === streamItem.alias;
    },

    render() {
        var links = Object.keys(streams).map(key => {
            var listClass = classNames({
                'active': this.isActiveLink(streams[key])
            });

            return (
                <li className={listClass}>
                    <NavLink href={streams[key].path}>{streams[key].title}</NavLink>
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
