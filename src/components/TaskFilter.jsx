function TaskFilter({
  allTodos,
  completedTodos,
  activeTodos,
  todos,
  setTodos,
  filter,
  setFilter,
}) {
  return (
    <div className='todo__filter'>
      <div className='filter__btn'>
        <button
          /* highlights the All button when the all filter is selected */
          className={`filter__all ${filter === 'all' ? 'filter__state' : ''}`}
          onClick={() => {
            setFilter('all');
          }}
        >
          All <span className='badge'>{allTodos}</span>
        </button>
        <button
          /* highlights the Active button when the active filter is selected */
          className={`filter__active ${
            filter === 'active' ? 'filter__state' : ''
          }`}
          onClick={() => {
            setFilter('active');
          }}
        >
          Active <span className='badge'>{activeTodos}</span>
        </button>
        <button
          /* highlights the Completed button when the completed filter is selected */
          className={`filter__completed ${
            filter === 'completed' ? 'filter__state' : ''
          }`}
          onClick={() => {
            setFilter('completed');
          }}
        >
          Completed <span className='badge'>{completedTodos}</span>
        </button>
      </div>
      <button
        className='clear__btn'
        onClick={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      >
        Clear completed
      </button>
    </div>
  );
}
export default TaskFilter;
