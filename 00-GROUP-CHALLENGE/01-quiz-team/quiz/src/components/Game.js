import React, { useState, useEffect } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet } from './../actions/gameActions';
import { useRouteMatch } from 'react-router-dom';
import THEMES_LIST from './../mockdata/Themes';
    
function Game(props){
    const URL_QUERY = props.match.params.themeSlug;
    let theme = THEMES_LIST.find(e=>e.slug === URL_QUERY);
    let themeId = theme.id;
    const [themeSlug] = useState(URL_QUERY);
    const [sessionSet, setSessionSet] = useState([]);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){loadSessionSet(themeId, 'all', 'all', 'default', 12)};
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet, themeSlug]);

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    if(sessionSet.length !== 0){console.log('GAME component has received this data from API', sessionSet)};

    return (
        <>
            <div className="game__container">
                <div className="test__guarro">
                    <h2 className="test__guarro__titulo">COSAS CHUNGAS</h2>
                    <ul className="test__guarro__item">
                    {sessionSet.map((question)=>(
                        <li key={question.question}>
                            <p>{question.question}</p>
                            <p>A-{question.incorrect_answers[0]}</p>
                            <p>B-{question.incorrect_answers[1]}</p>
                            <p>C-{question.incorrect_answers[2]}</p>
                            <p>D-{question.correct_answer}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Game;
