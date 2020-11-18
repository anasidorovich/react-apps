import React, { Component } from 'react';

export default class StatusFilter extends Component {
  changeFilterState(e) {
    const { children } = e.currentTarget;
    [...children].forEach((child) => {
      child.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  onToggleFilter = (e) => {
    e.preventDefault();
    this.changeFilterState(e);
    this.props.onFilter(e.target.innerText.toLowerCase());
  };

  render() {
    return (
      <div>
        <div className="btn-group btn-group-toggle" data-toggle="buttons" onClick={this.onToggleFilter} >
          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" defaultChecked /> All </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option2" /> Active </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option3" /> Done</label>
        </div>
      </div>
    );
  }
}