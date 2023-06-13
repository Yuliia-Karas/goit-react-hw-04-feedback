import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export default function FeedbackOptions(props) {
  function countTotalFeedback() {
    return props.state.good + props.state.neutral + props.state.bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((props.state.good / countTotalFeedback()) * 100);
  }

  const total = countTotalFeedback();
  return total ? (
    <>
      <div className={css.statistics}>
        <p>Good: {props.state.good}</p>
        <p>Neutral: {props.state.neutral}</p>
        <p>Bad: {props.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p>
      </div>
    </>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
}

FeedbackOptions.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
