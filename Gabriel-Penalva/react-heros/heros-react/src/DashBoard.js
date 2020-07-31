import React from 'react';
import './DashBoard.css';
function DashBoard({ heroList }) {
  let heroBoard = heroList.slice(0, 4);
  return (

    <div className='center '>
      <h3>Top Heros:</h3>
      <div className='modules'>
        {heroBoard.map((hero) => (
          <div key={hero.id} className='module'><a className='dashlist hero-list_item' href={`/id/${hero.id}`} >  {hero.name}</a></div>
        ))}
      </div>
    </div>
  );

}

export default DashBoard;
