import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions (props) {
 
      return (
      <div className={css['feedback-options']}>
        {props.options.map(option => {
          return (
            <button
              className={css.button}
              key={option}
              onClick={() => props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
        
      </div>
    );
  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
