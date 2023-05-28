import React, { Component } from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
    constructor(props) {
        super(props)
    }
    render()

{
        return (
            <>
                <h2>Statistics</h2>
                <p>Good: { this.props.state.good}</p>
                <p>Neutral: { this.props.state.neutral}</p>
                <p>Bad: { this.props.state.bad}</p>
                
            </>
            
        )
        
    }
}