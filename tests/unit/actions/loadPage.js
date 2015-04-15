'use strict';

var expect = require('chai').expect;
var loadPage = require('../../../actions/loadPage.js');

describe('loadPage', function () {
    it('should fire UPDATE_PAGE_TITLE event', function (done) {
        var payload = {
            config: {
                title: 'foo'
            }
        };

        var option = {
            dispatcherContext: {
                dispatch: function(name, incomingPayload) {
                    expect(name).to.equal('UPDATE_PAGE_TITLE');
                    expect(incomingPayload).to.deep.equal({ pageTitle: payload.config.title});
                }
            }
        };

        var mockActionContext = require('fluxible/utils').createMockActionContext(option);

        mockActionContext.executeAction(loadPage, payload, function(err) {
            if (err) {
                done(err);
                return;
            }

            done();
        });
    });
});
