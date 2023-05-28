import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
    }
   
  render() {
    return (
      <>
        <button onClick={this.props.goodFeedback} >Good</button>
        <button onClick={this.props.neutralFeedback}>Neutral</button>
        <button onClick={this.props.badFeedback}>Bad</button>
      </>
    );
  }
}
