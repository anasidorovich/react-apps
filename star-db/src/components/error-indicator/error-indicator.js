import React from 'react';
import './error-indicator.css';
import icon from './OhNo.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator card mb-5">
      <img src={icon} alt="error" />
    </div>
  );

}

export default ErrorIndicator;