'use strict';

import _ from 'lodash';
import React from 'react/addons';
import Immutable from 'immutable';
import { ComponentMixin as ImmutableMixin } from 'fluxible-immutable-utils';

// components
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import Slide from './Slide';

var Stream = React.createClass({
    mixins: [ ImmutableMixin ],

    getDefaultProps () {
        return {
            initSlideIndex: 0,
            videoPerPage: 6
        };
    },

    getInitialState () {
        return {
            slideAnimation: 'slide-left',
            slideIndex: this.props.initSlideIndex,
            slides: Immutable.List()
        };
    },

    componentWillMount () {
        var slides;

        this.videos = this.props.stream.get('videos', Immutable.List()).toJS();
        slides = Immutable.fromJS(_.chunk(this.videos, this.props.videoPerPage));

        this.setState({
            slides: slides
        });
    },

    componentDidMount () {
        this.slideTimestamp = new Date();
    },

    handleIndexChange (step) {
        var currentTimestamp = new Date();
        var slideLength = this.state.slides.size;

        if (currentTimestamp - this.slideTimestamp < this.props.gapBetweenClick) {
            return;
        }
        this.slideTimestamp = currentTimestamp;

        this.setState({
            slideIndex: (this.state.slideIndex + slideLength + step) % slideLength,
            slideAnimation: (step > 0 ? 'slide-left' : 'slide-right')
        });
    },

    render () {
        var leftButton = null;
        var rightButton = null;

        if (this.state.slideIndex !== 0) {
            leftButton = (
                <span className="NavButton Left" onClick={this.handleIndexChange.bind(this, -1)}></span>
            );
        }

        if (this.state.slideIndex !== this.state.slides.size - 1) {
            rightButton = (
                <span className="NavButton Right" onClick={this.handleIndexChange.bind(this, 1)}></span>
            );
        }

        return (
            <div className="Stream">
                <h2 className="StreamTitle">{this.props.stream.get('title')}</h2>
                <div className="SlideViewport" style={{
                    position: 'relative',
                    width: '100%',
                    height: 104
                }}>
                    <ReactCSSTransitionGroup transitionName={this.state.slideAnimation}>
                        <Slide key={this.state.slideIndex}
                            streamName={this.props.stream.get('name')}
                            videos={this.state.slides.get(this.state.slideIndex)} />
                    </ReactCSSTransitionGroup>
                </div>
                {leftButton}
                {rightButton}
            </div>
        );
    }
});

export default Stream;
