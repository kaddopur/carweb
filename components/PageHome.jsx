'use strict';
var React = require('react/addons');
var HeroVideo = require('./HeroVideo');
var CoverTile = require('./CoverTile');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var PageHome = React.createClass({
    getInitialState: function () {
        return {
            slides: [
                'SVgkNW2cENQ', 'q6f-LLM1H6U'
            ],
            currentSlide: 0
        };
    },
    componentDidMount: function() {
        this.timer = setInterval(this.nextSlide, 5000);
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    nextSlide: function () {
        this.setState({
            currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
        });
    },
    render: function() {
        var slides = this.state.slides.map(function (slide, index) {
            return (
                <div className="pure-g" key={index}>
                    <div className="pure-u-1-2">
                        <CoverTile yid={slide}/>
                        <CoverTile yid={slide}/>
                        <CoverTile yid={slide}/>
                    </div>
                    <div className="pure-u-1-2">
                        <CoverTile yid={slide}/>
                        <CoverTile yid={slide}/>
                        <CoverTile yid={slide}/>
                    </div>
                </div>
            );
        });

        return (
            <div className="pure-g">
                <div className="pure-u-1 pure-u-sm-3-5 pure-u-lg-1-2">
                    <HeroVideo yid="CWFB8HCQsu0"/>
                </div>
                <div className="pure-u-1 pure-u-sm-2-5 pure-u-lg-1-3 carousel-container">
                    <ReactCSSTransitionGroup transitionName="carousel">
                        {slides[this.state.currentSlide]}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
});

module.exports = PageHome;
