import React, { useState, useEffect } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet } from './../actions/gameActions';
import THEMES_LIST from '../mockdata/THEMES_LIST';
import Question from './Question';
import Results from './Results';
import * as GAME_PARAMS from './../config/gameParameters';
    
function Game(props){
    const URL_QUERY = props.match.params.themeSlug;
    let theme = THEMES_LIST.find(e=>e.slug === URL_QUERY);
    let themeId = theme.id;

    const [themeSlug] = useState(URL_QUERY);
    const [sessionSet, setSessionSet] = useState([]);
    const [counter, setCounter] = useState(0);
    const [started] = useState(new Date().toISOString());
    const [scores, setScores] = useState([]);
    const GAME_DATA = {
        totalQuestions: 0,
        points: 0,
        started: started,
        startedStr: '',
        ended: 0,
        endedStr: '',
        playTime: 0,
        wrong: 0,
        right: 0,
        unanswered: 0,
        message: ''
    }

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){
            loadSessionSet(themeId, GAME_PARAMS.DIFFICULTY, GAME_PARAMS.TYPE, GAME_PARAMS.ENCODING, GAME_PARAMS.SESSION_QUESTIONS_NUMBER)
        }
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet, themeSlug]);

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    function updateCounter(value = undefined){
        setScores([...scores, {question: sessionSet[counter], completed: true, userAnser: value}]);
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
        for (let el of scores){
            if(el.userAnser === true){ GAME_DATA.right++; GAME_DATA.points += GAME_PARAMS.POINTS_RIGHT_ANSWER }
            if(el.userAnser === false){ GAME_DATA.wrong++; GAME_DATA.points += GAME_PARAMS.POINTS_WRONG_ANSWER }
            if(el.userAnser === ''){ GAME_DATA.unanswered++; GAME_DATA.points += GAME_PARAMS.POINTS_IF_UNANSWERED }
        }
        if(GAME_DATA.points < 0) { GAME_DATA.points = 0 }
        if((GAME_DATA.totalQuestions * GAME_PARAMS.POINTS_RIGHT_ANSWER * 0.7) < GAME_DATA.points){ GAME_DATA.message=' well done!' }
        else if((GAME_DATA.totalQuestions * GAME_PARAMS.POINTS_RIGHT_ANSWER * 0.4) < GAME_DATA.points){ GAME_DATA.message=' keep trying!' }
        else if((GAME_DATA.totalQuestions * GAME_PARAMS.POINTS_RIGHT_ANSWER * 0.15) < GAME_DATA.points){ GAME_DATA.message=' don\'t give up yet!' }
        else { GAME_DATA.message=' not your best day.' }
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

    function newGame(){
        setSessionSet([]);
        setCounter(0);
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
            console.log(sessionSet, counter)
            return (
                <>
                    <Results 
                        data_questions_total={GAME_DATA.totalQuestions}
                        data_questions_scores={GAME_DATA.scores}
                        data_started={GAME_DATA.startedStr}
                        data_ended={GAME_DATA.endedStr}
                        data_played={GAME_DATA.played}
                        data_right={GAME_DATA.right}
                        data_wrong={GAME_DATA.wrong}
                        data_unanswered={GAME_DATA.unanswered}
                        data_points={GAME_DATA.points}
                        data_message={GAME_DATA.message}
                        newGameClick={newGame}
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
