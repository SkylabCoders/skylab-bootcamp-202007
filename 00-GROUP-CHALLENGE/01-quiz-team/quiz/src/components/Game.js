import React, { useState, useEffect, forceUpdate } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet } from './../actions/gameActions';
import THEMES_LIST from './../mockdata/Themes';
import Question from './Question';
    
function Game(props){
    const URL_QUERY = props.match.params.themeSlug;
    let theme = THEMES_LIST.find(e=>e.slug === URL_QUERY);
    let themeId = theme.id;
    const [themeSlug] = useState(URL_QUERY);
    const [sessionSet, setSessionSet] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){
            loadSessionSet(themeId, 'all', 'all', 'default', 12)
        };
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet, themeSlug]);

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    function updateCounter(){
        setCounter(counter + 1);
    }

    if(sessionSet.length !== 0){
        if(counter <= sessionSet.length){
            return (
                <>
                    <Question i={counter} click={updateCounter}/>
                </>
            )
        } else {
            return (
                <p>This is a result</p>
            )
        }
    } else {
        return (
            <>
                <p>Loading question data...</p>
            </>           
        )
    }
}

export default Game;
