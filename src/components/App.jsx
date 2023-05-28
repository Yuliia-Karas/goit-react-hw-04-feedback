import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    }

//   goodFeedback = () => { this.setState((state) => ({ good: state.good + 1 })) };
//   neutralFeedback = () => { this.setState((state) => ({ neutral: state.neutral + 1 })) };
//  badFeedback = () => { this.setState((state) => ({bad: state.bad + 1 })) };
  
  onLeaveFeedback=(option)=>
  {
    console.log(option);
    return (this.setState((state) => ({ [option]: state[option] + 1 })));
  }



  render() {
    return (
      <>
        
        {/* <FeedbackOptions goodFeedback={this.goodFeedback} neutralFeedback={this.neutralFeedback} badFeedback={this.badFeedback}   /> */}
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        </Section> 
        <Section title="Statistics">
          <Statistics state={this.state} />
        </Section>
        
      </>
    );
  }
}
