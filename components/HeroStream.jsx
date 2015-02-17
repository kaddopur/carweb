'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var HeroVideo = require('./HeroVideo');
var HeroSlide = require('./HeroSlide');

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

                ],
                [
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    }

                ]
            ],
            initSlideIndex: 0
        };
    },
    getInitialState: function() {
        return {
            slideIndex: this.props.initSlideIndex
        };
    },
    handleIndexChange: function(step) {
        var slideLength = this.props.slides.length;

        this.setState({
            slideIndex: (this.state.slideIndex + slideLength + step) % slideLength
        });
    },
    render: function() {
        var leftButton = null;
        var rightButton = null;

        if (this.state.slideIndex !== 0) {
            leftButton = (
                <span className="NavButton Left" onClick={this.handleIndexChange.bind(this, -1)}></span>
            );
        }

        if (this.state.slideIndex !== this.props.slides.length - 1) {
            rightButton = (
                <span className="NavButton Right" onClick={this.handleIndexChange.bind(this, 1)}></span>
            );
        }
        return (
            <div className="HeroStream">
                <h2 className="StreamTitle">{this.props.name}</h2>
                <HeroVideo {...this.props.heroVideo}/>
                <ReactCSSTransitionGroup transitionName="example">
                    <HeroSlide videos={this.props.slides[this.state.slideIndex]}/>
                </ReactCSSTransitionGroup>
                <div className="HeroNavButtonContainer">{leftButton}{rightButton}</div>
            </div>
        );
    }
});

module.exports = HeroStream;
