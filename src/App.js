import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let localTodos = JSON.parse(window.localStorage.getItem('todos'));

    this.state = {
      todos: localTodos ? localTodos : [],
    };
  }

  onAddTodo = (todo) => {
    todo = {...todo, creationDate: new Date().toLocaleString('DE')};
    this.setState({ todos: [...this.state.todos, todo] }, () => {
      this.saveTodos();
    });

  };

  onRemoveTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }, () => {
      this.saveTodos();
    });
  };

  onUpdateTodo = (id, todo) => {
    todo = {...todo, updateDate: new Date().toLocaleString('DE')};
    this.setState({ todos: this.state.todos.map(t => t.id === id ? todo: t) }, () => {
      this.saveTodos();
    });
  };

  saveTodos = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    return (
        <ThemeProvider theme={{ fontFamily: '\'Noto Sans HK\', sans-serif' }}>
          <div className="App">
            <GlobalStyle whiteColor  />
            <AddTodo addTodo={this.onAddTodo} />
            <TodoList todos={this.state.todos} removeTodo={this.onRemoveTodo} updateTodo={this.onUpdateTodo} />
          </div>
        </ThemeProvider>

    )
  };
}
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
  }
`;

