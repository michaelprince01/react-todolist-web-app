import { SquareCheck, Sun } from 'lucide-react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);

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
      <TaskForm />
      <TaskFilter />
      <div className='todo__container'>
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
