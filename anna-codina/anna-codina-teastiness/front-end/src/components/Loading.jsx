import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <img
        alt="loading"
        src="https://www.parcon-india.com/m/images/giphy.gif"
      ></img>
      <p>cargando...</p>
    </div>
  );
}

export default Loading;
