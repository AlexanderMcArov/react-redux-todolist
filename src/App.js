import React from 'react';
import './todo/todolist.css'
import TodoInput from './todo/TodoInput'
import TodoList from './todo/TodoList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header><div>Todo<span>List</span></div></header>
      <TodoInput/>
      <TodoList />
    </div>
  );
}

export default App;
