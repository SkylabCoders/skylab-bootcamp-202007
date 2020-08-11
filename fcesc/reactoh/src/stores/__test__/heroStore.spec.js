import HeroStore from './../heroStore';
import actionTypes from './../../actions/actionTypes';
import HERO_LIST from './../../mockdata/superHeroData';
import dispatcher from './../../AppDispatcher';

describe('Herostore', () => {
    it('should register LOAD_HERO_BY_ID', () => {
        const mockHeroId = 620;
        let result = HERO_LIST.find(e=>e.id===mockHeroId);
        const action = {
            action: actionTypes.LOAD_HERO_BY_ID,
            data: result
        }
        dispatcher.dispatch(action);
        const heroData = HeroStore.getHeroById(mockHeroId);
        
        expect(heroData).toEqual(result);
    })

    it('should get paginated hero list LOAD_PAGINATED_HERO_LIST', () => {
        const paginatedList = [
            {
                "id": 1,
                "name": "A-Bomb",
                "slug": "1-a-bomb",
                "powerstats": {
                  "intelligence": 38,
                  "strength": 100,
                  "speed": 17,
                  "durabiltesty": 80,
                  "power": 24,
                  "combat": 64
                },
                "appearance": {
                  "gender": "Male",
                  "race": "Human",
                  "height": [
                    "6'8",
                    "203 cm"
                  ],
                  "weight": [
                    "980 lb",
                    "441 kg"
                  ],
                  "eyeColor": "Yellow",
                  "hairColor": "No Hair"
                },
                "biography": {
                  "fullName": "Richard Milhouse Jones",
                  "alterEgos": "No alter egos found.",
                  "aliases": [
                    "Rick Jones"
                  ],
                  "placeOfBirth": "Scarsdale, Arizona",
                  "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
                  "publisher": "Marvel Comics",
                  "alignment": "good"
                },
                "work": {
                  "occupation": "Musician, adventurer, author; formerly talk show host",
                  "base": "-"
                },
                "connections": {
                  "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
                  "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Ketesth Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
                },
                "images": {
                  "xs": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg",
                  "sm": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
                  "md": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg",
                  "lg": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg"
                }
              },
              {
                "id": 2,
                "name": "Abe Sapien",
                "slug": "2-abe-sapien",
                "powerstats": {
                  "intelligence": 88,
                  "strength": 28,
                  "speed": 35,
                  "durabiltesty": 65,
                  "power": 100,
                  "combat": 85
                },
                "appearance": {
                  "gender": "Male",
                  "race": "Icthyo Sapien",
                  "height": [
                    "6'3",
                    "191 cm"
                  ],
                  "weight": [
                    "145 lb",
                    "65 kg"
                  ],
                  "eyeColor": "Blue",
                  "hairColor": "No Hair"
                },
                "biography": {
                  "fullName": "Abraham Sapien",
                  "alterEgos": "No alter egos found.",
                  "aliases": [
                    "Langdon Everett Caul",
                    "Abraham Sapien",
                    "Langdon Caul"
                  ],
                  "placeOfBirth": "-",
                  "firstAppearance": "Hellboy: Seed of Destruction (1993)",
                  "publisher": "Dark Horse Comics",
                  "alignment": "good"
                },
                "work": {
                  "occupation": "Paranormal Investigator",
                  "base": "-"
                },
                "connections": {
                  "groupAffiliation": "Bureau for Paranormal Research and Defense",
                  "relatives": "Edtesth Howard (wife, deceased)"
                },
                "images": {
                  "xs": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg",
                  "sm": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
                  "md": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg",
                  "lg": "https://cdn.rawgtest.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg"
                }
              }
        ];
        const page = 0;
        const itemsPerPage = 2;
        const result = heroService.getHeroListPage(page, itemsPerPage);
        dispatcher.dispatch({
            type: actionTypes.LOAD_PAGINATED_HERO_LIST,
            data: result
        })
        dispatcher.dispatch(action);
        const heroData = HeroStore.getPaginatedHeroes();

        expect(result).toEqual(paginatedList);
        expect(heroData).toEqual(result);
    })

})