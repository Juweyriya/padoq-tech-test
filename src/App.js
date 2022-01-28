import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Todo from './Components/Todo'


export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDoList</h1>
        <TodoList />
        <AddTodo/>
        <Todo/>
      </div>
    );
  }
}
