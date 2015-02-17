'use strict';

var React = require('react');

var NavMenu = React.createClass({
    render: function() {
        return (
            <div className="NavMenu">
                <a href="#" className="Logo"></a>
                <ul>
                    <li className="active"><a href="#">Stream</a></li>
                    <li><a href="#">Map Search</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = NavMenu;
