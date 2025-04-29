
import './App.css'

import React from 'react';
import Header from './component/Header';
import Leftside from './component/Leftside';
import Right from './component/Right';
import Center from './component/Center';


const App = () => {
  return (
    <>
    <div className='bg-gray-100 h-full w-full'>
      <Header />
      <div className="w-11/12 mx-auto flex justify-between gap-4 mt-4">
        <Leftside />
        <Center />
        <Right />
      </div>
      
     
    </div>
    </>
  );
}

export default App;

