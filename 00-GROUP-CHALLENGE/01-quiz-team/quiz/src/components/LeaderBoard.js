import React, {useEffect, useState} from 'react';
import leaderboardStore from './../stores/leaderboardStore';
import { loadLeaderboard } from './../actions/leaderboardActions';
import './../css/leaderboard.css';

function LeaderBoard(){
    const [leaderboardList, setLeaderboardList] = useState(leaderboardStore.getLeaderboard());

    useEffect(()=>{
        leaderboardStore.addChangeListener(onChange);
        if(leaderboardList.length === 0){loadLeaderboard()};
        return ()=>{leaderboardStore.removeChangeListener(onChange);}
    }, [leaderboardList.length]);
    
    function onChange(){
        setLeaderboardList(leaderboardStore.getLeaderboard());
    }

    console.log('DATA AQUI', leaderboardList);

    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <ul>
                {console.log(leaderboardList)}
                {leaderboardList.map((e)=>(
                    <li key={e.name}><strong>{e.name}</strong>, {e.points} points</li>
                ))}
            </ul>
        </div>
    )
}

export default LeaderBoard;