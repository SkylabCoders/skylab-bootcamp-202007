import React from 'react';

function Hello({ name }){

  return ((name) 
    ? (<h1>Hello, {name}!</h1>) 
    : (<span>Hey, stranger</span>)
  );
}

export default Hello;