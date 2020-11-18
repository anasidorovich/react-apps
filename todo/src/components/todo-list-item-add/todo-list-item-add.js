import React from 'react';
import './todo-list-item-add.css';

export default class TodoListItemAdd extends React.Component {
  render() {
    const { onAdd } = this.props;
    return (
      <div className="todo-list-item-add">
        <input className="todo-list-item-input" placeholder='' />
        <button className="btn btn-secondary active" onClick={onAdd} >Add Item</button>
      </div>
    );
  }
}
