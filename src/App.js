import React from 'react'
import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    { id: 1, complited: false, title: 'to buy a bread' },
    { id: 2, complited: false, title: 'to buy a milk' },
    { id: 3, complited: false, title: 'to buy a butter' }
  ]

  return (
    <div className='wrapper'>
      <h1>React tutorial</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
