import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Item from './Item';
import './../css/Dashboard.css';
import gameStore from './../stores/gameStore';
import {loadThemes, loadTopThemes, loadSessionSet} from './../actions/gameActions';


function Dashboard() {
    const [themesList, setThemesList] = useState([]);
    const [topThemesList, setTopThemesList] = useState([]);
    const [sessionSet, setSessionSet] = useState([]);

    useEffect(() => {
        gameStore.addChangeListener(onChangeThemes);
        if (themesList.length === 0) { loadThemes() };
        return () => { gameStore.removeChangeListener(onChangeThemes); }
    }, []);

    useEffect(() => {
        gameStore.addChangeListener(onChangeTopThemes);
        if (topThemesList.length === 0) { loadTopThemes() };
        return () => { gameStore.removeChangeListener(onChangeTopThemes); }
    }, []);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){loadSessionSet()};
        return ()=>{gameStore.removeChangeListener(onChangeSessionSet);}
    }, [sessionSet]);
    
    function onChangeThemes(){
        setThemesList(gameStore.getThemes());
    }

    function onChangeTopThemes() {
        setTopThemesList(gameStore.getTopThemes());
    }

    function onChangeSessionSet(){
        setSessionSet(gameStore.getSessionSet());
    }

    if(sessionSet.length !== 0){console.log('component has received this data from API', sessionSet)};
    //loadSessionSet();

    return (
        <>
            <div className="dashboard__container">
                <div className="dashboard__welcome">
                    <Welcome />
                </div>
                <div className="dashboard__themes">
                    <h2 className="section__title">THEMES</h2>
                    
                        <ul className="themes__grid">
                            {themesList.map((theme) => (
                                <li key={theme.title}>
                                        <Item themeTitle={theme.title} themeImgurl={theme.url} themeId={theme.id} themeSlug={theme.slug}/>
                                </li>
                            ))}
                        </ul>
                </div>
                <div className="dashboard__topThemes">
                    <h2 className="section__title">TOP THEMES</h2>
                    <ul className="topThemes__grid">
                        {topThemesList.map((topTheme) => (
                            <li key={topTheme.title}>
                                <Item themeTitle={topTheme.title} themeImgurl={topTheme.url} themeId={topTheme.id} themeSlug={topTheme.slug}/>
                            </li>
                        ))}
                    </ul>
                </div>
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

export default Dashboard;