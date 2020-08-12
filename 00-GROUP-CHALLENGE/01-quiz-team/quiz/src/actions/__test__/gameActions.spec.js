import { loadThemes, loadTopThemes, loadSessionSet } from './../gameActions';
import gameStore from './../../stores/gameStore';
import THEMES_LIST from './../../mockdata/THEMES_LIST';

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
        expect(topThemes).toEqual(result);
    })
    test('Test that all set questions are loaded', async ()=>{
        await loadSessionSet('all', 'all', 'all', 'default', 10);
        const mockSessionSet = gameStore.getSessionSet();
        console.log('AQUI!!!', mockSessionSet);
        expect(mockSessionSet).toBeDefined();
        expect(mockSessionSet).toHaveLength(10);
    })
})
