'use strict';

var React = require('react');
var HeroVideo = require('./HeroVideo');
var CoverTile = require('./CoverTile');

var HeroStream = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Now Watching',
            heroVideo: {
                youtubeId: '5XYxuVYmR6A'
            },
            slides: [1],
            initSlideIndex: 0
        };
    },
    render: function() {
        var heroSlides = this.props.slides.map(function renderHeroSlide(slide, index) {
            return (
                <div className="HeroSlide" key={index}>
                    <CoverTile isActive={true} />
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                    <CoverTile/>
                </div>
            );
        });
        return (
            <div className="HeroStream">
                <h2 className="StreamTitle">{this.props.name}</h2>
                <HeroVideo {...this.props.heroVideo}/>
                {heroSlides}
                <div className="HeroNavButtonContainer">
                    <span className="NavButton Left"></span>
                    <span className="NavButton Right"></span>
                </div>
            </div>
        );
    }
});

module.exports = HeroStream;
