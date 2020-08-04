import React, { useEffect, useState } from 'react';
import './../css/Timer.css'

function Timer(props) {
    let [countDown, setCountDown] = useState(30);

    useEffect(() => {
        const timer =  setTimeout(()=>{
            setCountDown(countDown-1);
        },1000);
		return () => clearTimeout(timer);
	}, []);  

    return (
        <>
            <div className="">           
                {countDown}
            </div>
        </>
    )
}

export default Timer;