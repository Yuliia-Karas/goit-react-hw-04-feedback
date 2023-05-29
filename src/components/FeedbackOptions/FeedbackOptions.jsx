import React, { Component } from 'react';
// import css from './FeedbackOptions.module.css';
// import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  // constructor(props) {
  //   super(props);
  //   }
   
  render() {
    return (
        <>
            {this.props.options.map((option) => {
                return (
               <button key={option} onClick={()=>this.props.onLeaveFeedback(option)}>{option}</button>) 
                })
    
            }
        {/* <button onClick={this.props.goodFeedback} >Good</button>
        <button onClick={this.props.neutralFeedback}>Neutral</button>
        <button onClick={this.props.badFeedback}>Bad</button> */}
      </>
    );
  }
}
