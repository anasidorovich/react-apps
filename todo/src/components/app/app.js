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
      { label: 'Drink coffee', important: false, id: 1 },
      { label: 'Learn React', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
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
        const lastIndex = todoData.length + 1;
        const el = document.getElementsByClassName("todo-list-item-input")[0].value;
        const item = { label: el, important: false, id: lastIndex };
        return {
          todoData: el ? [...todoData, item ] : todoData
        }
      })
   }

   toggleImportant = (id) => {
     this.setState(({ todoData }) => {
       const idx = todoData.findIndex((el) => el.id === id);
       return {
          todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
       }
     });
   }

   toggleDone = (id) => {
     this.setState(({ todoData }) => {
       const idx = todoData.findIndex((el) => el.id === id);
       const oldItem = todoData[idx];
       const newItem = { ...oldItem, done: !oldItem.done };
       console.log([...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]);
       return {
         todoData: [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
       }
     });
   }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-container">
        <AppHeader todo={ todoCount } done={ doneCount } />
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