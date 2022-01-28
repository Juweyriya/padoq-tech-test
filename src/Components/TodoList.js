import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';



export default class TodoList extends Component {
    state = {
      addTodoValue: "",
      todoList: []
    }
    
    getTime() {
      let d = new Date();
      var n = d.getTime();
      return n;
    }
    
    handleDelete = todo => {
      const todoList = this.state.todoList.filter(t => t.id !== todo);
      this.setState({ todoList });
    }
  
    handleDone = todo => {
      const todoList = [...this.state.todoList];
      todoList.map(t => {
        if (t.id === todo.id) {
          t.isDone = !t.isDone;
        }
        
        return t;
      });
      
      this.setState({todoList});
    }
    
    addNewTodo = value => {
      if (value) {
        const todoList = [...this.state.todoList];
        todoList.push(
          {
            id: this.getTime(),
            value: value,
            isDone: false
          }
        );
        
        this.setState({ addTodoValue: "", todoList })
      } else {
        console.log("Please Add Todo Text");
      }
    }
  
    render() {
      return (
        <table className="table">
            <tbody>
              {this.state.todoList.map((todo, index) => (
                <tr key={todo.id}>
                  <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-center">
                  <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                </td>
              </tr>
            </tbody>
        </table>
      );
    }
  }
  
  