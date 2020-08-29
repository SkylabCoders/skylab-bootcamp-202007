import LEADERBOARD from './../../mockdata/LEADERBOARD';
import leaderboardStore from './../../stores/leaderboardStore';
import { loadLeaderboard, saveResults } from './../leaderboardActions';
import sortResults from './../../utils/sortResults';

describe('Test set for leaderboard actions', ()=>{
    test('testing leaderboard loadLeaderboard action', ()=>{
        loadLeaderboard();
        const leaderboard = leaderboardStore.getLeaderboard();
        const result = LEADERBOARD;
        expect(leaderboard).toEqual(result);
    })
    test('testing leaderboard saveResults action', ()=>{
        loadLeaderboard();
        const leaderboard = leaderboardStore.getLeaderboard();
        const newPlayerInLeaderboard = {name: 'Pepe', points: 150};
        const result = sortResults([...leaderboard, newPlayerInLeaderboard]);
        saveResults(newPlayerInLeaderboard);
        const newLeaderboard = sortResults(leaderboardStore.getLeaderboard());
        expect(newLeaderboard).toEqual(result)
    })
})
