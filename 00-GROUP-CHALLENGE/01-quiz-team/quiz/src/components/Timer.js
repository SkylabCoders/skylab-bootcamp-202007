import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './../css/Timer.css'

function Timer(props) {
    let [countDown, setCountDown] = useState(30);

    useEffect(() => {
        const timerInterval = setTimeout(() => {
            if (countDown > 0) setCountDown(countDown - 1);
            else if (countDown === 0) {
                return;
            }

        }, 1000);
        return () => clearTimeout(timerInterval);
    }, [countDown]);

    const message = () => {
        if (countDown === 0) return (
            <p>
                Time's Up!!
            </p>
        );
    }

    const UrgeWithPleasureComponent = () => (
        <CountdownCircleTimer
            isPlaying
            duration={30}
            colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
            ]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )

    return (
        <>
            <div className="timer__container">

                <div>
                    {UrgeWithPleasureComponent()}
                    <p>{message()}</p>
                </div>
            </div>
        </>
    )
}

export default Timer;