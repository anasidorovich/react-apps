import React, { Component } from 'react';
import "./app.css";
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoListItemAdd from '../todo-list-item-add';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createItem(1, 'Drink coffee'),
      this.createItem(2, 'Learn React', true),
      this.createItem(3, 'Have a lunch')
    ],
    term: '',
    type: 'all'
  };

  createItem(id, label, important = false) {
    return {
      label: label,
      important: important,
      id: id
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      }
    })
  };

  searchForItems(arr, term) {
    return term ? arr.filter((el) => el.label.includes(term)) : arr;
  };

  searchItems = (term) => {
    this.setState({ term });
  };

  filterForItems(arr, type) {
    if (type === 'active') {
      return arr.filter((el) => el.important);
    }
    if (type === 'done') {
      return arr.filter((el) => el.done);
    }
    return arr;
  };

  filterItems = (type) => {
    this.setState({ type });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const idx = ++this.maxId;
      return {
        todoData: text ? [...todoData, this.createItem(idx, text)] : todoData
      }
    })
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem.[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  render() {
    const { todoData, term, type } = this.state;
    let visibleItems = this.searchForItems(todoData, term);
    visibleItems = this.filterForItems(visibleItems, type);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-container">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="search-panel d-flex">
          <SearchPanel onSearchFilter={this.searchItems} />
          <StatusFilter onFilter={this.filterItems} />
        </div>
        <TodoList todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />
        <TodoListItemAdd onAdd={this.addItem} />
      </div>
    );
  }
}