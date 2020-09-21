import React from 'react';

export default function Hello({ name }) {
  /* if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  } */
  return name ? <h1>Hello, {name}!</h1> : <span>Hey, stranger</span>

}