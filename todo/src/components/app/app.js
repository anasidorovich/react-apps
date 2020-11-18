import React, { Component } from 'react';
import "./app.css";
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoListItemAdd from '../todo-list-item-add';

export default class App extends Component {
  state = {
    todoData: [
      this.createItem(1, 'Drink coffee'),
      this.createItem(2, 'Learn React'),
      this.createItem(3, 'Have a lunch')
    ]
  }

  createItem(id, label) {
    return {
      label: label,
      important: false,
      id: id
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    })
  }

  addItem = () => {
    this.setState(({ todoData }) => {
      const idx = todoData.length + 1;
      const text = document.getElementsByClassName("todo-list-item-input")[0].value;
      return {
        todoData: text ? [...todoData, this.createItem(idx, text)] : todoData
      }
    })
  }

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem.[propName] };
    console.log([...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]);
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-container">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList todos={todoData}
          onDelete={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />
        <TodoListItemAdd onAdd={this.addItem} />
      </div>
    );
  }
}