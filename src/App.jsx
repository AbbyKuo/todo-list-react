import TodoItem from './components/TodoItem';

function App() {
  return (
      <div>
          <h1>My todo list</h1>
          <TodoItem text="Finish plus project." />
          <TodoItem text="Feed Brownie yummy bons." />
          <TodoItem text="Be awesome and grateful." />
      </div>
  );
}

export default App;