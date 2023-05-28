import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    }

  goodFeedback = () => { this.setState((state) => ({ good: state.good + 1 })) };
  neutralFeedback = () => { this.setState((state) => ({ neutral: state.neutral + 1 })) };
 badFeedback = () => { this.setState((state) => ({bad: state.bad + 1 })) };
  render() {
    return (
      <>
        <h2>"Please leave feedback"</h2>
        <FeedbackOptions goodFeedback={this.goodFeedback} neutralFeedback={this.neutralFeedback} badFeedback={this.badFeedback}   />
        <Statistics state={this.state} />
      </>
    );
  }
}
