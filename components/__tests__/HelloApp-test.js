/* global jest, describe, it */

'use strict';

jest.dontMock('../HelloApp.jsx');

var React = require('react/addons');
var HelloApp = require('../HelloApp.jsx');
var TestUtils = React.addons.TestUtils;

describe('HelloApp', function() {
    var helloApp;

    beforeEach(function () {
        helloApp = TestUtils.renderIntoDocument(
            <HelloApp />
        );
    });
    
    it('should show up', function() {
        expect(helloApp).toBeDefined();
    });

    it('should have correct initial state', function() {
        expect(helloApp.state).toEqual(jasmine.any(Object));
        expect(helloApp.state.hello).toEqual('Hello');
    });

    it('should have correct initial state', function() {
        TestUtils.Simulate.click(helloApp.getDOMNode());
        expect(helloApp.state).toEqual(jasmine.any(Object));
        expect(helloApp.state.hello).toEqual('Hola');
    });
});
