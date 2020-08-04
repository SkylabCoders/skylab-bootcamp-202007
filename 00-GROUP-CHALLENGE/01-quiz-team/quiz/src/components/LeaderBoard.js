import React, {useEffect, useState} from 'react';
import leaderboardStore from './../stores/leaderboardStore';
import { loadLeaderboard } from './../actions/leaderboardActions';

function LeaderBoard(){
    const [leaderboardList, setLeaderboardList] = useState([]);

    useEffect(()=>{
        leaderboardStore.addChangeListener(onChange);
        if(leaderboardList.length === 0){loadLeaderboard()};
        return ()=>{leaderboardStore.removeChangeListener(onChange);}
    }, []);
    
    function onChange(){
        setLeaderboardList(leaderboardStore.getLeaderboard());
    }

    return (
        <div className="">
            <h1>Leaderboard</h1>
        </div>
    )
}

export default LeaderBoard;