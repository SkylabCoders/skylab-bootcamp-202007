import React, { useState } from 'react';
import './customTimeLine.sass';

function CustomTimeline(props) {
  const [timeline] = useState(props.timeline);

  return (
    <div className='timeline'>
      <ul>
        {timeline.map(item => {
          return(
            <li className='timeline__item' key={item.time + item.est_time}>
              <div className='item__left'>
              <p>{(item.time === undefined || item.time === '') ? `e ${item.est_time}` : `  ${item.time}` }</p>
              </div>
              <div className='item__separator'>
                <span className={`separator__dot ${item.status}`}></span>
                <span className='separator__line'></span>
              </div>
              <div className='item__right'>
              <p>{item.name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default CustomTimeline;