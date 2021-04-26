import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class TodoApp extends React.Component {

  state = {
    items: [],
  }

  onNewItem = (item) => {
    /*
    const newItems = this.state.items;
    newItems.push(item);
    this.setState({
      items: newItems,
    })*/
    this.setState({
      items: [...this.state.items, item],
    })
  }

  render() {
    return(
      <div id='main'>
      <Header/>
      <TodoForm onNewItem={this.onNewItem}/>
      <TodoList items={this.state.items}/> 
      </div>
    )
  }
}

export default TodoApp;
