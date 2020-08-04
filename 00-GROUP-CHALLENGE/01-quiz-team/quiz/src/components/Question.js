import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import questionStore from './../stores/questionStore';

function Question(){
    const [question, setQuestion] = useState({});

    useEffect(()=>{
        questionStore.addChangeListener(onChange);
        if(question === {}){loadQuestion()};
        return ()=>{questionStore.removeChangeListener(onChange);}
    }, []);
    
    function onChange(){
        setQuestion(questionStore.getQuestion());
    }

    return;
}

export default Question;