import { Dot } from 'lucide-react';

function Footer({ completedTodos, activeTodos }) {
  return (
    <div className='todo__footer'>
      <div className='todo__state-info'>
        <small>{activeTodos} tasks left</small>
        <Dot size={15} color='#8ba2c8' />
        <small>{completedTodos} completed</small>
      </div>
      <small className='todo__motivation'>
        Small steps make big progress 🚀
      </small>
    </div>
  );
}
export default Footer;
