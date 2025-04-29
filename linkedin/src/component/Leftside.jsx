import React from 'react';
import Profilecard from './Profilecard';
import NewsEvents from './NewsEvents';

const Leftside = () => {
  return (
    <div className='h-dvh w-2/12'>
      <Profilecard />
      <NewsEvents />
    </div>
  );
}

export default Leftside;
