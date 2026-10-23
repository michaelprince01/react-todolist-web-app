import { Calendar, Dot, Pencil, Trash } from 'lucide-react';

function TaskList() {
  return (
    <div className='todo__list'>
      <div className='todos'>
        <input type='checkbox' className='todo__complete-btn' />

        <div className='todo__content'>
          <p className='todo__title'>
            Finish the React To-Do Appfesfeffesffefeffcac
          </p>

          <div className='todo__details'>
            <div className='todo__date'>
              <Calendar size={15} />
              <small>Due today</small>
            </div>

            <div className='todo__priority'>
              <Dot size={20} />
              <small>High priority</small>
            </div>
          </div>
        </div>
      </div>

      <small className='todo__status todo__status--active'>Completed</small>

      <div className='todo__btn'>
        <button className='todo__edit' aria-label='Edit task'>
          <Pencil size={12} />
        </button>

        <button className='todo__delete' aria-label='Delete task'>
          <Trash size={12} />
        </button>
      </div>
    </div>
  );
}

export default TaskList;
