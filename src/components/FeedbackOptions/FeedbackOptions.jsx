import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  // constructor(props) {
  //   super(props);
  //   }

  render() {
    return (
      <div className={css['feedback-options']}>
        {this.props.options.map(option => {
          return (
            <button
              className={css.button}
              key={option}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
        {/* <button onClick={this.props.goodFeedback} >Good</button>
        <button onClick={this.props.neutralFeedback}>Neutral</button>
        <button onClick={this.props.badFeedback}>Bad</button> */}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
