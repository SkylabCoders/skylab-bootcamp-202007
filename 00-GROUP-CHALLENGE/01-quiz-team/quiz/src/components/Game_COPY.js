import React, { useState, useEffect } from 'react';
import gameStore from './../stores/gameStore';
import { loadSessionSet } from './../actions/gameActions';
import THEMES_LIST from './../mockdata/Themes';
import Option from './Option';
import Timer from './Timer';
    
function Game(props){
    const URL_QUERY = props.match.params.themeSlug;
    let theme = THEMES_LIST.find(e=>e.slug === URL_QUERY);
    let themeId = theme.id;
    const [themeSlug] = useState(URL_QUERY);
    const [sessionSet, setSessionSet] = useState([]);
    const [question] = useState(sessionSet[0]);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){loadSessionSet(themeId, 'all', 'all', 'default', 12)};
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet, themeSlug]);

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    const typeOfAnswer = async () => {
        if(await question[0].type === 'multiple') return (
        <div>
            <h2 className="question__title">Question: {question[0].category}</h2>
            <p className="">{question[0].question}</p>
            <p>Choose the correct answer</p>
            <Option option={question[0].correct_answer}/>
            <Option option={question[0].incorrect_answers[0]}/>
            <Option option={question[0].incorrect_answers[1]}/>
            <Option option={question[0].incorrect_answers[2]}/>
        </div>
        );
        else if(await question[0].type === Boolean)return (
            <div>
                <h2 className="question__title">Question: {question[0].category}</h2>
                <p className="">{question[0].question}</p>
                <p>True or false</p>
                <Option option={question[0].correct_answer}/>
                <Option option={question[0].incorrect_answers}/>
            </div>
            )
    }

    if(sessionSet.length !== 0){console.log('GAME component has received this data from API', sessionSet)};

    return (
        <>
            <div className="question__container">
                <div className="question__item">
                        {typeOfAnswer()}
                </div>
                <Timer />
            </div>
        </>
    )
}

export default Game;
