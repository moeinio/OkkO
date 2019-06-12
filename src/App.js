import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  onAddTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] })
  };
  onRemoveTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  };

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.onAddTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.onRemoveTodo}/>
      </div>
    )
  };
}
