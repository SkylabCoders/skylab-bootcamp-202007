import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './../css/Timer.css'
import { checkPropTypes } from 'prop-types';

function Timer(){
    

function launch(){
}
   

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Time's Up!!!!</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  function UrgeWithPleasureComponent() {
    const [key, setKey] = useState(0);
    console.log('after')
    return (
      <div className="App">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={5}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [true],1000}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="button-wrapper">
          <button onClick={() => setKey(prevKey => prevKey + 1)}>
            Restart Timer
          </button>
        </div>
      </div>
    );
  }

    return (
        <>
            <div className="timer__container">
                {console.log('before render timer')}
                <div>
                    {launch()}
                </div>
            </div>
        </>
    )
}

export default Timer;