import React from 'react';
import './todo-list-item-add.css';

export default class TodoListItemAdd extends React.Component {
  state = {
    labelValue: ''
  }

  onLabelChange = (e) => {
    this.setState({
      labelValue: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.labelValue);
    this.setState({
      labelValue: ''
    });
  }

  render() {
    return (
      <form className="form-wrapper todo-list-item-add" onSubmit={this.onSubmit}>
        <input className="todo-list-item-input" placeholder='' onChange={this.onLabelChange}
        value={this.state.labelValue}/>
        <button className="btn btn-secondary active">Add Item</button>
      </form>
    );
  }
}
