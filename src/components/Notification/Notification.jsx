import React from 'react';
// import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = props => <p>{props.message} </p>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
