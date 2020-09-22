import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()=>{
  return (
    <div className='jumbotron'>
      <h1>React course with Redux</h1>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to='about' className='btn btn-primary btn-tg'>
        Learn more
      </Link>
    </div>
  );
}

export default HomePage;