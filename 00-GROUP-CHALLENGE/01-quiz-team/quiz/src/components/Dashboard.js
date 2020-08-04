import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Item from './Item';
import './../css/Dashboard.css';
import gameStore from './../stores/gameStore';
import {loadThemes, loadTopThemes} from './../actions/gameActions';

const url = "https://images.pexels.com/photos/9606/people-woman-sport-muscles.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const mockTheme = {
    imgurl: url,
    title: 'Sports'
}
function Dashboard(){
    const [themesList, setThemesList] = useState([]);
    const [topThemesList, setTopThemesList] = useState([]);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeThemes);
        if(themesList.length === 0){loadThemes()};
        return ()=>{gameStore.removeChangeListener(onChangeThemes);}
    }, []);

    useEffect(()=>{
        gameStore.addChangeListener(onChangeTopThemes);
        if(topThemesList.length === 0){loadTopThemes()};
        return ()=>{gameStore.removeChangeListener(onChangeTopThemes);}
    }, []);
    
    function onChangeThemes(){
        setThemesList(gameStore.getThemes());
    }

    function onChangeTopThemes(){
        setTopThemesList(gameStore.getTopThemes());
    }

    return (
        <>
            <div className="dashboard__container">
<<<<<<< HEAD
                <Welcome />
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl} />
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
                <Item themeTitle={mockTheme.title} themeImgurl={mockTheme.imgurl}/>
=======
                <div className="dashboard__welcome">
                    <Welcome />
                </div>
                <div className="dashboard__themes">
                    <h2 className="section__title">THEMES</h2>
                    <ul className="themes__grid">
                    {themesList.map((theme)=>(
                        <li key={theme.title}>
                            <Item themeTitle={theme.title} themeImgurl={theme.url} themeId={theme.id}/>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="dashboard__topThemes">
                    <h2 className="section__title">TOP THEMES</h2>
                    <ul className="topThemes__grid">
                    {topThemesList.map((topTheme)=>(
                        <li key={topTheme.title}>
                            <Item themeTitle={topTheme.title} themeImgurl={topTheme.url} themeId={topTheme.id}/>
                        </li>
                    ))}
                    </ul>
                </div>
>>>>>>> a8868aadee8bf3af7fa026975d4a31806774c6fd
            </div>
        </>
    )
}

export default Dashboard;