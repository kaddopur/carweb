'use strict';

import { expect } from 'chai';
import loadPage from '../../../actions/loadPage.js';

describe('loadPage', () => {
    it('should fire UPDATE_PAGE_TITLE event', (done) => {
        var payload = {
            config: {
                title: 'foo'
            }
        };

        var option = {
            dispatcherContext: {
                dispatch(name, incomingPayload) {
                    expect(name).to.equal('UPDATE_PAGE_TITLE');
                    expect(incomingPayload).to.deep.equal({ pageTitle: payload.config.title});
                }
            }
        };

        var mockActionContext = require('fluxible/utils').createMockActionContext(option);

        mockActionContext.executeAction(loadPage, payload, (err) => {
            if (err) {
                done(err);
                return;
            }

            done();
        });
    });
});
