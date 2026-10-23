import { Dot } from 'lucide-react';

function Footer() {
  return (
    <div className='todo__footer'>
      <div className='todo__state-info'>
        <small>3 tasks left</small>
        <Dot size={15} color='#8ba2c8' />
        <small>2 completed</small>
      </div>
      <small className='todo__motivation'>
        Small steps make big progress 🚀
      </small>
    </div>
  );
}
export default Footer;
