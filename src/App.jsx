import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
            {
                text: "Learn about React",
                isCompleted: false,
                isDeleted: false,
            },{
                text: "Meet friend for lunch",
                isCompleted: false,
                isDeleted: false,
            },{
                text: "Build really cool todo app",
                isCompleted: false,
                isDeleted: false,
            }
        ]);
        
    const addTodo = (text) => {

    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    };

    const completeTodo = (index) => {
            const newTodos = [...todos];
            newTodos[index].isCompleted = true;
            setTodos(newTodos);
        };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1).isDeleted = true;
        setTodos(newTodos);
    };

    return (
        <div className='app'>
            <h1 className='todo-list'>My todo list</h1>
            {/* <TodoItem text="Finish plus project." />
            <TodoItem text="Feed Brownie yummy bons." />
            <TodoItem text="Be awesome and grateful." /> */}
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>

            ))}
            <TodoForm addTodo={addTodo} />
        </div >
    );
}

export default App;