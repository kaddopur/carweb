'use strict';
var React = require('react/addons');
var HeroVideo = require('./HeroVideo');
var CoverTile = require('./CoverTile');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var PageHome = React.createClass({
    getInitialState: function () {
        return {
            slides: [
                'SVgkNW2cENQ', 'q6f-LLM1H6U', 'CWFB8HCQsu0'
            ],
            currentSlide: 0
        };
    },
    nextSlide: function (step) {
        if (this.state.currentSlide === 0 && step === -1) {
            return;
        } else if (this.state.currentSlide === this.state.slides.length - 1 && step === 1) {
            return;
        }

        this.setState({
            currentSlide: (this.state.currentSlide + this.state.slides.length + step) % this.state.slides.length,
            transitionName: (step === 1 ? 'carousel' : 'carousel-reverse')
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
                    <HeroVideo yid="JqNCz7jyK50"/>
                </div>
                <div className="pure-u-1 pure-u-sm-2-5 pure-u-lg-1-3 carousel-container">
                    <ReactCSSTransitionGroup transitionName={this.state.transitionName}>
                        {slides[this.state.currentSlide]}
                    </ReactCSSTransitionGroup>
                </div>
                <button onClick={this.nextSlide.bind(null, -1)}>Prev</button>
                <button onClick={this.nextSlide.bind(null, 1)}>Next</button>
            </div>
        );
    }
});

module.exports = PageHome;
