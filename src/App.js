import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {createGlobalStyle, ThemeProvider} from 'styled-components'



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
        <ThemeProvider theme={{ fontFamily: '\'Noto Sans HK\', sans-serif' }}>
          <div className="App">
            <GlobalStyle whiteColor  />
            <AddTodo addTodo={this.onAddTodo} />
            <TodoList todos={this.state.todos} removeTodo={this.onRemoveTodo}/>
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