import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...todoItem } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...todoItem}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
}

export default TodoList;