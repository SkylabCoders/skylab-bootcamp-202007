import React from 'react';
import './spinner.sass';

const Spinner = ()=>{
  return (
    <div className='spinner'>
      <div className='loader'>
      </div>
      <p>loading data...</p>
    </div>
  );
}

export default Spinner;