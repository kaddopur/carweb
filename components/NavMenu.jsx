'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;

var NavMenu = React.createClass({
    getDefaultProps: function () {
        return {
            selected: 'home',
            links: {}
        };
    },
    render: function() {
        var selected = this.props.selected;
        var links = this.props.links;

        var linkHTML = Object.keys(links).map(function (name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'menu-item-divided pure-menu-selected';
            }

            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page}>{link.title}</NavLink>
                </li>
            );
        });

        return (
            <div id="menu">
                <div className="pure-menu pure-menu-open">
                    <a className="pure-menu-heading" href="#">Cardian</a>
                    <ul>{linkHTML}</ul>
                </div>
            </div>
        );
    }
});

module.exports = NavMenu;
