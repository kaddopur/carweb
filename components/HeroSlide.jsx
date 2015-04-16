'use strict';

import React from 'react';

// components
import CoverTile from './CoverTile';

var HeroSlide = React.createClass({
    getDefaultProps() {
        return {
            videos: []
        };
    },
    render() {
        var coverTiles = this.props.videos.map((video, index) => {
            return (
                <CoverTile {...video} key={index}/>
            );
        });
        return (
            <div className="HeroSlide">
                {coverTiles}
            </div>
        );
    }
});

export default HeroSlide;
