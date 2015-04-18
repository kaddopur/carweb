'use strict';

import React from 'react';

// components
import { NavLink } from 'flux-router-component';
import classNames from 'classnames';

var NavMenu = React.createClass({
    propTypes: {
        route: React.PropTypes.object.isRequired
    },

    getDefaultProps: function() {
        return {
            navItems: [
                {
                    path: '/stream/newest',
                    alias: '/',
                    title: '最新影片'
                },
                {
                    path: '/stream/reported',
                    title: '新聞報導'
                }
            ]
        };
    },

    isActiveLink(navItem) {
        return this.props.route.url === navItem.path ||
               this.props.route.url === navItem.alias;
    },

    render() {
        var links = this.props.navItems.map(navItem => {
            var listClass = classNames({
                'active': this.isActiveLink(navItem)
            });

            return (
                <li className={listClass}>
                    <NavLink href={navItem.path}>{navItem.title}</NavLink>
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
