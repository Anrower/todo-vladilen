import React, { useState } from 'react'
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = useState(
    [
      { id: 1, completed: false, title: 'to buy a bread' },
      { id: 2, completed: false, title: 'to buy a milk' },
      { id: 3, completed: false, title: 'to buy a butter' }
    ]
  )

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false
        }
      ])
    )
  }



  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React tutorial</h1>
        <h2>{typeof addTodo}</h2>
        <AddTodo onCreate={addTodo} />
        {todos.length ?
          <TodoList todos={todos} onToggle={toggleTodo} /> :
          <p>No todos</p>
        }
      </div>
    </Context.Provider>
  );
}

export default App;
