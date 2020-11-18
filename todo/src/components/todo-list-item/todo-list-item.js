import React, { Component } from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
  }

  onClickLabel = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  };

  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item d-flex";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onClickLabel}>{label}</span>
        <button type="button" className="btn btn-outline-danger" onClick={onDelete}>
          <i className="far fa-trash-alt"></i>
        </button>
        <button type="button" className="btn btn-outline-info" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
      </span>
    );
  }
}