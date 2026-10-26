import { Plus, CalendarDays, Flag } from 'lucide-react';
import { useState } from 'react';

function TaskForm({ addTodos }) {
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  function handleSubmit() {
    if (input.trim() === '') return;
    else
      addTodos({
        title: input,
        dueDate: dueDate,
        priority: priority,
      });
    setInput('');
    setDueDate('');
    setPriority('');
  }

  return (
    <div className='todo__form'>
      <div className='todo__main-input'>
        <Plus className='input__icon' size={18} />

        <input
          value={input}
          className='todo__input'
          type='text'
          placeholder='Add a new task...'
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>

      <div className='todo__form-options'>
        <label className='todo__date-input'>
          <CalendarDays size={15} />
          <input
            type='date'
            aria-label='Due date'
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </label>

        <label className='todo__priority-input'>
          <Flag size={15} />
          <select
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value='' disabled>
              Priority
            </option>
            <option value='High priority'>High priority</option>
            <option value='Medium priority'>Medium priority</option>
            <option value='Low priority'>Low priority</option>
          </select>
        </label>

        <button className='add__todo' onClick={handleSubmit}>
          <Plus size={18} />
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
