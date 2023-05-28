import React, { Component } from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
    constructor(props) {
        super(props);
    }

    countTotalFeedback() {
    return (
        this.props.state.good+this.props.state.neutral+this.props.state.bad
    )}
    
    countPositiveFeedbackPercentage() {
        return (
           Math.round(this.props.state.good/this.countTotalFeedback()*100) 
        )
    }

    render()

{
        return (
            <>
                <h2>Statistics</h2>
                <p>Good: { this.props.state.good}</p>
                <p>Neutral: { this.props.state.neutral}</p>
                <p>Bad: {this.props.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback:{ this.countPositiveFeedbackPercentage()}%</p>

                
            </>
            
        )
        
    }
}