'use strict';

import React from 'react';

// components
import { NavLink } from 'flux-router-component'

var NavMenu = React.createClass({
    render() {
        return (
            <div className="NavMenu">
                <NavLink href="/" className="Logo"></NavLink>
                <ul>
                    <li className="active"><a href="#">Stream</a></li>
                    <li><a href="#">Map Search</a></li>
                </ul>
            </div>
        );
    }
});

export default NavMenu;
