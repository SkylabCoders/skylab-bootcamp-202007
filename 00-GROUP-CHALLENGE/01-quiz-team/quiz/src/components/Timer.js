import React, { useEffect, useState } from 'react';
import './../css/Timer.css'

function Timer(props) {
    let [countDown, setCountDown] = useState(30);

    useEffect(() => {
		heroStore.addChangeListener(onChange);
        if (countDown === 30) {
            loadTimer();
		} 
		return () => heroStore.removeChangeListener(onChange);
	}, []);
    

    function callTimer(){
    const timer =  setTimeout(()=>{
            countDown--;
            setCountDown(countDown);
            console.log(countDown);
        },1000);
    }

    callTimer();

    return (
        <>
            <div className="">           
                {countDown}
            </div>
        </>
    )
}

export default Timer;