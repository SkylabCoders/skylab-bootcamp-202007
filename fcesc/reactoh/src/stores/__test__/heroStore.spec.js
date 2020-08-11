import HeroStore from './../heroStore';
import actionTypes from './../../actions/actionTypes';
import HERO_LIST from './../../mockdata/superHeroData';

describe('Herostore', () => {
    test('should register LOAD_HERO_BY_ID', () => {
        const mockHeroId = 620;
        let result = HERO_LIST.find(e=>e.id===mockHeroId);
        const action = {
            action: actionTypes.LOAD_HERO_BY_ID,
            data: result
        }
        const loadHero = HeroStore.getHeroById(mockHeroId);
    })
})