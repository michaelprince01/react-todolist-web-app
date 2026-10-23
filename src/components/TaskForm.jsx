import { Plus } from 'lucide-react';

function TaskForm() {
  return (
    <div className='todo__form'>
      <Plus className='input__icon' size={18} />

      <input
        className='todo__input'
        type='text'
        placeholder='Add a new task...'
      />

      <button className='add__todo'>
        <Plus size={18} />
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;
