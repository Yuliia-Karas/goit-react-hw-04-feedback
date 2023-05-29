import React, { Component } from "react";
// import css from './Statistics.module.css';
// import PropTypes from 'prop-types';
import { Notification } from "components/Notification/Notification";

export default class FeedbackOptions extends Component {
    // constructor(props) {
    //     super(props);
    // }

    countTotalFeedback() {
    return (
        this.props.state.good+this.props.state.neutral+this.props.state.bad
    )}
    
    countPositiveFeedbackPercentage() {
        return (
           Math.round(this.props.state.good/this.countTotalFeedback()*100) 
        )
    }

    render() {
        const total = this.countTotalFeedback();
        return (
             total ? (
            <>
                <p>Good: { this.props.state.good}</p>
                <p>Neutral: { this.props.state.neutral}</p>
                <p>Bad: {this.props.state.bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback:{ this.countPositiveFeedbackPercentage()}%</p>
            </>) : (<Notification message="There is no feedback"></Notification>)
        )
    }
}