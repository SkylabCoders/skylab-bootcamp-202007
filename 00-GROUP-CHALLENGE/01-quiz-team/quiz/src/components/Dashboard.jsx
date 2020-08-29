import React, { useState, useEffect } from 'react';
import Item from './Item';
import './../css/dashboard.scss';
import gameStore from './../stores/gameStore';
import {loadThemes, loadTopThemes, loadSessionSet} from './../actions/gameActions';


function Dashboard() {
    const [themesList, setThemesList] = useState([]);
    const [topThemesList, setTopThemesList] = useState([]);
    const [sessionSet, setSessionSet] = useState([]);

    useEffect(() => {
        gameStore.addChangeListener(onChangeThemes);
        if (themesList.length === 0) { loadThemes() }
        return () => { gameStore.removeChangeListener(onChangeThemes); }
    }, []);

    useEffect(() => {
        gameStore.addChangeListener(onChangeTopThemes);
        if (topThemesList.length === 0) { loadTopThemes() }
        return () => { gameStore.removeChangeListener(onChangeTopThemes); }
    }, []);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeSessionSet);
        if(sessionSet.length === 0){loadSessionSet()}
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

    return (
        <>
            <div className="dashboard__container">
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
            </div>
        </>
    )
}

export default Dashboard;