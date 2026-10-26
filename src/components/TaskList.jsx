import { CalendarDays, Calendar, Dot, Flag, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

function getDueDateLabel(todo) {
  // Hide the due-date label if no due date was provided.
  if (todo.dueDate === '') return '';

  // Get today's date and reset the time to midnight.
  // This lets us compare calendar days instead of hours and minutes.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Convert the task's due-date string into a local Date object.
  const dueDate = new Date(todo.dueDate + 'T00:00:00');

  // If the due date is before today, the task is overdue.
  if (dueDate < today) {
    return `Overdue · ${dueDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })}`;
  }

  // Check whether the task is due today.
  if (dueDate.getTime() === today.getTime()) {
    return 'Due today';
  }

  // Check whether the task is due exactly one day from today.
  if (dueDate.getTime() === today.getTime() + 86400000) {
    return 'Due tomorrow';
  }

  // Calculate the number of days between today and the due date.
  const daysRemaining = (dueDate.getTime() - today.getTime()) / 86400000;

  // Show a countdown for tasks due in 2 to 6 days.
  if (daysRemaining >= 2 && daysRemaining <= 6) {
    return `Due in ${daysRemaining} days`;
  }

  // For tasks due in 7 or more days, show the actual due date.
  return `Due ${dueDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}`;
}

function TaskList({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDueDate, setEditedDueDate] = useState(todo.dueDate);
  const [editedPriority, setEditedPriority] = useState(todo.priority);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='todo__list'>
      <div className='todos'>
        <input
          checked={todo.isCompleted}
          type='checkbox'
          className='todo__complete-btn'
          onChange={() => {
            toggleTodo(todo.id);
          }}
        />
        {/* handling the editing feature */}
        {isEditing === true ? (
          <div className='todo__edit-form'>
            {/* Add the error class when an error message exists; otherwise, use only the normal input class. */}
            <input
              className={`todo__edit-title ${
                errorMessage !== '' ? 'todo__edit-title--error' : ''
              }`}
              value={editedTitle}
              type='text'
              onChange={(e) => {
                setEditedTitle(e.target.value);
                setErrorMessage('');
              }}
            />
            {errorMessage !== '' && (
              <small className='todo__error'>{errorMessage}</small>
            )}

            <div className='todo__edit-field'>
              <CalendarDays size={15} className='todo__edit-icon' />
              <input
                className='todo__edit-date'
                type='date'
                aria-label='Due date'
                value={editedDueDate}
                onChange={(e) => {
                  setEditedDueDate(e.target.value);
                }}
              />
            </div>

            <div className='todo__edit-field'>
              <Flag size={15} className='todo__edit-icon' />
              <select
                className='todo__edit-priority'
                value={editedPriority}
                onChange={(e) => {
                  setEditedPriority(e.target.value);
                }}
              >
                <option value='' disabled>
                  Priority
                </option>
                <option value='High priority'>High priority</option>
                <option value='Medium priority'>Medium priority</option>
                <option value='Low priority'>Low priority</option>
              </select>
            </div>
            <div className='todo__edit-actions'>
              <button
                className='todo__cancel-btn'
                type='button'
                onClick={() => {
                  setEditedTitle(todo.title);
                  setEditedDueDate(todo.dueDate);
                  setEditedPriority(todo.priority);
                  setIsEditing(false);
                  setErrorMessage('');
                }}
              >
                Cancel
              </button>

              <button
                className='todo__save-btn'
                type='button'
                onClick={() => {
                  if (editedTitle.trim() === '') {
                    setErrorMessage('Task title cannot be empty');
                    return;
                  }
                  editTodo(todo.id, {
                    title: editedTitle,
                    dueDate: editedDueDate,
                    priority: editedPriority,
                  });
                  setIsEditing(false);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        ) : (
          <div className='todo__content'>
            <p className='todo__title'>{todo.title}</p>

            <div className='todo__details'>
              {(todo.isCompleted || getDueDateLabel(todo)) && (
                <div className='todo__date'>
                  <Calendar size={15} />
                  <small>
                    {todo.isCompleted === true
                      ? `Completed on ${todo.completedOn.toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )}`
                      : getDueDateLabel(todo)}
                  </small>
                </div>
              )}

              <div className='todo__priority'>
                <Dot size={20} />
                <small>{todo.priority}</small>
              </div>
            </div>
          </div>
        )}
      </div>

      {todo.isCompleted === true ? (
        <small className='todo__status todo__status--completed'>
          Completed
        </small>
      ) : (
        <small className='todo__status todo__status--active'>Active</small>
      )}

      <div className='todo__btn'>
        <button
          className='todo__edit'
          aria-label='Edit task'
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <Pencil size={12} />
        </button>

        <button
          className='todo__delete'
          aria-label='Delete task'
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <Trash size={12} />
        </button>
      </div>
    </div>
  );
}

export default TaskList;
