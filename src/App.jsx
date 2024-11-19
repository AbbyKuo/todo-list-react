import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  return (
      <div>
          <h1>My todo list</h1>
          <TodoItem text="Finish plus project." />
          <TodoItem text="Feed Brownie yummy bons." />
          <TodoItem text="Be awesome and grateful." />
          {todos.map()}
    </div >
  );
}

export default App;