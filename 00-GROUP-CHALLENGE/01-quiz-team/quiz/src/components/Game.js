import React, { useState, useEffect } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet } from './../actions/gameActions';
import THEMES_LIST from './../mockdata/Themes';
import Question from './Question';
import Results from './Results';
    
function Game(props){
    const URL_QUERY = props.match.params.themeSlug;
    let theme = THEMES_LIST.find(e=>e.slug === URL_QUERY);
    let themeId = theme.id;
    const [themeSlug] = useState(URL_QUERY);
    const [sessionSet, setSessionSet] = useState([]);
    const [counter, setCounter] = useState(0);
    const [started] = useState(new Date().toISOString());
    const GAME_DATA = {
        totalQuestions: 0,
        scores: [],
        points: 0,
        started: started,
        startedStr: '',
        ended: 0,
        endedStr: '',
        playTime: 0
    }

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){
            loadSessionSet(themeId, 'all', 'all', 'default', 3)
        };
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet, themeSlug]);

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    function updateCounter(value = undefined){
        console.log('valor entrada', value);
        GAME_DATA.scores.push({question: sessionSet[counter], userAnser: value});
        console.log('here are the stores', GAME_DATA.scores);
        if (counter < sessionSet.length){ 
            setCounter(counter + 1); 
        } else { 
            setSessionSet([]);
        }
    }

    function updateGameStatistics(){
        GAME_DATA.totalQuestions = counter;
        GAME_DATA.ended = new Date().toISOString();
        GAME_DATA.played = getPlayTime();
        let start = new Date(started);
        let end = new Date(GAME_DATA.ended);
        GAME_DATA.startedStr = `${start.getUTCHours()}:${start.getUTCMinutes()}:${start.getUTCSeconds()}`;
        GAME_DATA.endedStr = `${end.getUTCHours()}:${end.getUTCMinutes()}:${end.getUTCSeconds()}`;
    }

    function getPlayTime(){ 
        const end = new Date(GAME_DATA.ended).getTime();
        const start = new Date(started).getTime();
        const time = Math.floor((end - start) / 1000);
        let minutes, seconds, result;
        if (time > 60) { 
            minutes = Math.floor(time / 60);
            seconds = time % 60;
            result = `${minutes} minutes and ${seconds} seconds`;
        } else {
            seconds = time;
            result = `${seconds} seconds`;
        }
        return result;
    }

    if(sessionSet.length !== 0){
        if(counter < sessionSet.length){
            return (
                <>
                    <Question i={counter} click={(v)=>updateCounter(v)}/>
                </>
            )
        } else if (counter >= sessionSet.length) {
            updateGameStatistics();
            return (
                <>
                    <Results 
                        data_questions_total={GAME_DATA.totalQuestions}
                        data_questions_scores={GAME_DATA.scores}
                        data_started={GAME_DATA.startedStr}
                        data_ended={GAME_DATA.endedStr}
                        data_played={GAME_DATA.played}
                        newGameClick={console.log('CLICK TO PLAY NEW GAME FROM CHILD - RESULTS')}
                    />
                </>
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
