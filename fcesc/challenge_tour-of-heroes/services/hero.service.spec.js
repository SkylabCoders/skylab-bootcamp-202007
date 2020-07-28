'use strict';

describe('Test of hero service', function testHeroService(){
    let heroService;
    const hero =   {
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

    beforeEach(function (){
        heroService = new HeroService();
    });

    it('Should create a HeroService', function testHeroServiceCreation() {
        expect(heroService).toBeTruthy();
    });

    it('Sould return a HeroService list', function testGetFullHeroList(){
        expect(heroService.getHeroList()).toEqual(HERO_LIST);
    });

    it('Sould return a paginated HeroService list', function testGetPaginatedHeroList(){
        const page = 1;
        const itemsPerPage = 2;
        const paginatedList = [
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
        expect(heroService.getHeroListPage(page, itemsPerPage)).toEqual(paginatedList);
    });

    it('Should get one hero by id', function testGetHeroById(){
        const id = 620;
        expect(heroService.getHeroById(id)).toEqual(hero);
    });

    it('Should get one hero by name', function testGetHeroByName(){
        const name = 'Spider-Man';
        expect(heroService.getHeroByName(name)).toEqual(hero);
    });

    it('Should get one hero by real name', function testGetHeroByRealName(){
        const realName = 'Peter Parker';
        expect(heroService.getHeroByRealName(realName)).toEqual(hero);
    });

    it('Should get one hero by slug', function testGetHeroBySlug(){
        const slug = '620-spider-man';
        expect(heroService.getHeroBySlug(slug)).toEqual(hero);
    });

    it('Should get URL of hero images', function testGetHeroImagesUrls(){
        const id = 505;
        const imageURLs = {
            xs: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/505-oracle.jpg",
            sm: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/505-oracle.jpg",
            md: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/505-oracle.jpg",
            lg: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/505-oracle.jpg"
        }
        expect(heroService.getHeroImageURLsById(id)).toEqual(imageURLs);
    });

    it('Should get a biography of a given hero id', function testGetHeroBiographyById(){
        const id = 620;
        const biography = hero.biography;
        expect(heroService.getHeroBiographyById(id)).toEqual(biography);
    });

    it('Should get the appearance of a given hero id', function testGetHeroAppearanceById(){
        const id = 620;
        const appearance = hero.appearance;
        expect(heroService.getHeroAppearanceById(id)).toEqual(appearance);
    });

    it('Should get connections of a given hero id', function testGetHeroConnectionsById(){
        const id = 620;
        const connections = hero.connections;
        expect(heroService.getHeroConnectionsById(id)).toEqual(connections);
    });
})