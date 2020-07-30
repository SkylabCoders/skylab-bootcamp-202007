import React from 'react';
import './DashBoard.css';
function DashBoard({ heroList }) {
  let heroBoard = heroList.slice(0, 4);
  return (

    <div className='col-4 center '>
      <h3>Top Heros:</h3>
      {heroBoard.map((hero) => (
        <div ><a className='dashlist' key={hero.id} href={`/id/${hero.id}`} className="hero-list_item">  {hero.name}</a></div>
      ))}
    </div>
  );

  //   <h3>Top Heroes</h3>
  // <div class="grid grid-pad">
  //   <a *ngFor="let hero of heroes" class="col-1-4"
  //       routerLink="/detail/{{hero.id}}">
  //     <div class="module hero">
  //       <h4>{{hero.name}}</h4>
  //     </div>
  //   </a>
  // </div>
}

export default DashBoard;
