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
            slides: [
                [
                    {
                        youtubeId: '5XYxuVYmR6A',
                        isActive: true
                    },
                    {
                        youtubeId: '5XYxuVYmR6A'
                    },
                    {
                        youtubeId: '5XYxuVYmR6A'
                    },
                    {
                        youtubeId: '5XYxuVYmR6A'
                    },
                    {
                        youtubeId: '5XYxuVYmR6A'
                    },
                    {
                        youtubeId: '5XYxuVYmR6A'
                    }
                ],
                [
                    {
                        youtubeId: '4JipHEz53sU'
                    },
                    {
                        youtubeId: '4JipHEz53sU'
                    },
                    {
                        youtubeId: '4JipHEz53sU'
                    },
                    {
                        youtubeId: '4JipHEz53sU'
                    },
                    {
                        youtubeId: '4JipHEz53sU'
                    },
                    {
                        youtubeId: '4JipHEz53sU'
                    }

                ]
            ],
            initSlideIndex: 0
        };
    },
    render: function() {
        var heroSlides = this.props.slides.map(function renderHeroSlide(slide, index) {
            return (
                <div className="HeroSlide" key={index}>
                    <CoverTile {...slide[0]}/>
                    <CoverTile {...slide[1]}/>
                    <CoverTile {...slide[2]}/>
                    <CoverTile {...slide[3]}/>
                    <CoverTile {...slide[4]}/>
                    <CoverTile {...slide[5]}/>
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
