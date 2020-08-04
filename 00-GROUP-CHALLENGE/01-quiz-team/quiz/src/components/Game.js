import React, { useState, useEffect } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet} from './../actions/gameActions';
    
function Game(){
    const [sessionSet, setSessionSet] = useState([]);

    useEffect(()=>{
        gameStore.addChangeListener(onChange);
        if(sessionSet.length === 0){loadSessionSet()};
        return ()=>{gameStore.removeChangeListener(onChange);}
    }, [sessionSet]);

    function onChange(){
        setSessionSet(gameStore.getSessionSet());
    }

    // async function muestra(){
    //     let result = await gameStore.getSessionSet();
    //     console.log('following data has been received in component from api', await result);
    // }

    // loadSessionSet();
    // muestra();

    return (
        <>
            <div className="game__container">

            </div>
        </>
    )
}

export default Game;