import { loadThemes, loadTopThemes, loadSessionSet } from './../gameActions';
import gameStore from './../../stores/gameStore';
import THEMES_LIST from './../../mockdata/Themes';

describe('Test set for game actions', () => {
    test('Test that all themes are loaded', ()=>{
        loadThemes();
        const themes = gameStore.getThemes();
        const result = THEMES_LIST;
        expect(themes).toBe(result);
    })
    test('Test that all top themes are loaded', ()=>{
        loadTopThemes();
        const topThemes = gameStore.getTopThemes();
        const result = THEMES_LIST.slice(0,5);
        expect(topThemes).toBe(result);
    })
    test('Test that all set questions are loaded', ()=>{
        loadSessionSet('all', 'all', 'all', 'default', 10);
        const sessionSet = gameStore.getSessionSet();
        console.log('AQUI!!!', sessionSet);
        expect(sessionSet).toBeDefined();
        expect(sessionSet.length).toBe(10);
    })
})
