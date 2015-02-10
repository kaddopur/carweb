'use strict';

var React = require('react');

var HelloApp = React.createClass({
    getInitialState: function() {
        return {
            hello: 'Hello' 
        };
    },
    handleClick: function () {
        if (this.state.hello === 'Hello') {
            this.setState({hello: 'Hola'});
        } else {
            this.setState({hello: 'Hello'});
        }
    },
    render: function() {
        return (
            <h1 onClick={this.handleClick}>{this.state.hello}, fluxible!</h1>
        );
    }
});

module.exports = HelloApp;
