'use strict';

export default function readStreams(context, payload, done) {
    context.dispatch('READ_STREAMS_SUCCESS', {});
    done();
}
