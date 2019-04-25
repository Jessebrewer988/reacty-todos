import React, { Component }  from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import axios from 'axios';

// import uuid from 'uuid';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=40')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Todo Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo;
      })
    })
  }


  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]}))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
  }

  render() {
    const { todos } = this.state;

  return (
    <Router>
      <div className="App">
      <Header />
        <div className="container">
          <Route path="/" exact render={props => (
            <>          
            <AddTodo addTodo={this.addTodo}/>
            <Todos delTodo={this.delTodo} todos={todos} markComplete={this.markComplete}/>
            </>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
