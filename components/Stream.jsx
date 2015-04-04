'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Slide = require('./Slide');

var Stream = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'Community',
            initSlideIndex: 0,
            slides: [
                [
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
                    },
                    {
                        youtubeId: 'dFf4AgBNR1E'
                    }
                ]
            ]
        };
    },
    getInitialState: function() {
        return {
            slideIndex: this.props.initSlideIndex,
            slideAnimation: 'slide-left'
        };
    },
    componentDidMount: function() {
        this.slideTimestamp = new Date();
    },
    handleIndexChange: function(step) {
        var currentTimestamp = new Date();
        var slideLength = this.props.slides.length;

        if (currentTimestamp - this.slideTimestamp < this.props.gapBetweenClick) {
            return;
        }
        this.slideTimestamp = currentTimestamp;

        this.setState({
            slideIndex: (this.state.slideIndex + slideLength + step) % slideLength,
            slideAnimation: (step > 0 ? 'slide-left' : 'slide-right')
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
            <div className="Stream">
                <h2 className="StreamTitle">{this.props.name}</h2>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 104
                }}>
                    <ReactCSSTransitionGroup transitionName={this.state.slideAnimation}>
                        <Slide videos={this.props.slides[this.state.slideIndex]} key={this.state.slideIndex}/>
                    </ReactCSSTransitionGroup>
                </div>
                {leftButton}
                {rightButton}
            </div>
        );
    }
});

module.exports = Stream;
