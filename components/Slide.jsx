'use strict';

import React from 'react';

// components
import CoverTile from './CoverTile';

var Slide = React.createClass({
    render: function() {
        var coverTiles = this.props.videos.map((video, index) => {
            return (
                <CoverTile {...video} key={index}/>
            );
        });
        return (
            <div className="Slide">
                {coverTiles}
            </div>
        );
    }
});

export default Slide;
