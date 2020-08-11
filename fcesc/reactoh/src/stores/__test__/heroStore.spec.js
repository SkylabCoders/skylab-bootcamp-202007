import HeroStore from './../heroStore';
import actionTypes from './../../actions/actionTypes';
import { loadPaginatedHeroes, loadHeroById } from './../../actions/heroActions';
import dispatcher from './../../AppDispatcher';
import { EventEmitter } from 'events';

describe('Herostore', () => {
    it('should get LOAD_HERO_BY_ID', () => {
        const mockHero = {
            "id": 620,
            "name": "Spider-Man",
            "slug": "620-spider-man",
            "powerstats": {
              "intelligence": 90,
              "strength": 55,
              "speed": 67,
              "durability": 75,
              "power": 74,
              "combat": 85
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": [
                "5'10",
                "178 cm"
              ],
              "weight": [
                "165 lb",
                "74 kg"
              ],
              "eyeColor": "Hazel",
              "hairColor": "Brown"
            },
            "biography": {
              "fullName": "Peter Parker",
              "alterEgos": "No alter egos found.",
              "aliases": [
                "Spiderman",
                "Bag-Man",
                "Black Marvel",
                "Captain Universe",
                "Dusk",
                "Green Hood",
                "Hornet",
                "Mad Dog 336",
                "Peter Palmer",
                "Prodigy",
                "Ricochet",
                "Scarlet Spider",
                "Spider-Boy",
                "Spider-Hulk",
                "Spider-Morphosis"
              ],
              "placeOfBirth": "New York, New York",
              "firstAppearance": "Amazing Fantasy #15",
              "publisher": "Marvel Comics",
              "alignment": "good"
            },
            "work": {
              "occupation": "Freelance photographer, teacher",
              "base": "New York, New York"
            },
            "connections": {
              "groupAffiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
              "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
            },
            "images": {
              "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/620-spider-man.jpg",
              "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/620-spider-man.jpg",
              "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/620-spider-man.jpg",
              "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/620-spider-man.jpg"
            }
          };
        // const action = {
        //     action: actionTypes.LOAD_HERO_BY_ID,
        //     data: mockHero
        // }
        // dispatcher.dispatch(action);
        const mockHeroId = 620;
        loadHeroById(mockHeroId);
        const heroData = HeroStore.getHeroById(mockHeroId);

        console.log('AQUI DEL STORE', heroData);

        expect(heroData).toEqual(mockHero);
    })

    /*
    it('should get LOAD_HERO_BY_ID_2', () => {
        const mockHero = {
            "id": 620,
            "name": "Spider-Man",
            "slug": "620-spider-man",
            "powerstats": {
              "intelligence": 90,
              "strength": 55,
              "speed": 67,
              "durability": 75,
              "power": 74,
              "combat": 85
            },
            "appearance": {
              "gender": "Male",
              "race": "Human",
              "height": [
                "5'10",
                "178 cm"
              ],
              "weight": [
                "165 lb",
                "74 kg"
              ],
              "eyeColor": "Hazel",
              "hairColor": "Brown"
            },
            "biography": {
              "fullName": "Peter Parker",
              "alterEgos": "No alter egos found.",
              "aliases": [
                "Spiderman",
                "Bag-Man",
                "Black Marvel",
                "Captain Universe",
                "Dusk",
                "Green Hood",
                "Hornet",
                "Mad Dog 336",
                "Peter Palmer",
                "Prodigy",
                "Ricochet",
                "Scarlet Spider",
                "Spider-Boy",
                "Spider-Hulk",
                "Spider-Morphosis"
              ],
              "placeOfBirth": "New York, New York",
              "firstAppearance": "Amazing Fantasy #15",
              "publisher": "Marvel Comics",
              "alignment": "good"
            },
            "work": {
              "occupation": "Freelance photographer, teacher",
              "base": "New York, New York"
            },
            "connections": {
              "groupAffiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
              "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
            },
            "images": {
              "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/620-spider-man.jpg",
              "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/620-spider-man.jpg",
              "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/620-spider-man.jpg",
              "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/620-spider-man.jpg"
            }
          };
        const someName = {
            action: actionTypes.LOAD_HERO_BY_ID,
            data: mockHero
        }
        dispatcher.dispatch(someName);
        const heroData = HeroStore.getHeroById(mockHeroId);

        console.log('AQUI DEL STORE', heroData);

        expect(heroData).toEqual(mockHero);
    })
*/

    it('should get paginated hero list LOAD_PAGINATED_HERO_LIST', () => {
        const mockPaginatedList = [
            {
                "id": 1,
                "name": "A-Bomb",
                "slug": "1-a-bomb",
                "powerstats": {
                  "intelligence": 38,
                  "strength": 100,
                  "speed": 17,
                  "durability": 80,
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
                  "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
                },
                "images": {
                  "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg",
                  "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
                  "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg",
                  "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg"
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
                  "durability": 65,
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
                  "relatives": "Edith Howard (wife, deceased)"
                },
                "images": {
                  "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg",
                  "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
                  "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg",
                  "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg"
                }
              }
        ];
        const page = 0;
        const itemsPerPage = 2;
        loadPaginatedHeroes(page, itemsPerPage);

        // const action = ({
        //     type: actionTypes.LOAD_PAGINATED_HERO_LIST,
        //     data: result
        // })
        // dispatcher.dispatch(action);
        const dataFromStore = HeroStore.getPaginatedHeroes();
        //console.log('DATA FROM STORE', dataFromStore);

        expect(dataFromStore).toEqual(mockPaginatedList);
    })

    it('should invoke a change listener callback', () => {
        const callback = jest.fn();

        HeroStore.addChangeListener.apply(callback);
        HeroStore.emitChange();

        expect(callback).toHaveBeenCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    })

})