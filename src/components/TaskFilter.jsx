function TaskFilter() {
  return (
    <div className='todo__filter'>
      <div className='filter__btn'>
        <button className='filter__all'>
          All <span className='badge'>15</span>
        </button>
        <button className='filter__active'>
          Active <span className='badge'>2</span>
        </button>
        <button className='filter__completed'>
          Completed <span className='badge'>3</span>
        </button>
      </div>
      <button className='clear__btn'>Clear all</button>
    </div>
  );
}
export default TaskFilter;
