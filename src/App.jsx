import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    };

  return (
      <div className='app'>
          <h1 className='todo-list'>My todo list</h1>
          <TodoItem text="Finish plus project." />
          <TodoItem text="Feed Brownie yummy bons." />
          <TodoItem text="Be awesome and grateful." />
          {todos.map((todo, index) => (
              <TodoItem text={todo} key={index} />
        ))}
        <TodoForm addTodo={addTodo} />
    </div >
  );
}

export default App;