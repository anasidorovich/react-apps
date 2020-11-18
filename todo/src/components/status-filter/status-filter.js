import React, { Component } from 'react';

export default class StatusFilter extends Component {
  render() {
    return (
      <div>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" defaultChecked /> All </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option2" /> Active </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option3" /> done</label>
        </div>
      </div>
    );
  }
}