import { SquareCheck, Sun } from 'lucide-react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  let filterTodo;

  if (filter === 'all') {
    filterTodo = todos;
  } else if (filter === 'active') {
    filterTodo = todos.filter((todo) => !todo.isCompleted);
  } else filterTodo = todos.filter((todo) => todo.isCompleted);

  // add new todos
  function addTodos(todoData) {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: todoData.title,
        dueDate: todoData.dueDate,
        priority: todoData.priority,
        isCompleted: false,
        completedOn: null,
      },
    ]);
  }
  // toggles the todos to true or false
  function toggleTodo(todoID) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoID
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
              completedOn: !todo.isCompleted ? new Date() : null,
            }
          : todo,
      ),
    );
  }

  // delete a todos from an array
  function deleteTodo(todoID) {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  }

  // update/edit todo from the array
  function editTodo(todoID, todoData) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoID
          ? {
              ...todo,
              title: todoData.title,
              dueDate: todoData.dueDate,
              priority: todoData.priority,
            }
          : todo,
      ),
    );
  }

  // gets the number of tasks completed
  const allTodos = todos.length;
  // gets the number of tasks completed
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  // gets the number of tasks uncompleted
  const activeTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className='todo__wrapper'>
      <header className='todo__header'>
        <div className='header__content'>
          <SquareCheck color='#315BFF' size={40} />
          <div className='header__text-wrapper'>
            <h1 className='header__text'>To-Do List</h1>
            <small className='header__description'>
              Stay organised. Get things done.
            </small>
          </div>
        </div>
        <Sun color='#657a9e' style={{ cursor: 'pointer' }} />
      </header>
      <TaskForm addTodos={addTodos} />
      <TaskFilter
        allTodos={allTodos}
        completedTodos={completedTodos}
        activeTodos={activeTodos}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <div className='todo__container'>
        {filterTodo.map((todo) => (
          <TaskList
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
      <Footer completedTodos={completedTodos} activeTodos={activeTodos} />
    </div>
  );
}

export default App;
