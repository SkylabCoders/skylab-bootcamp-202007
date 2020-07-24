//¿Qué tiene que hacer el hero service -- un servicio, una función que va a manipular los datos que necesitemos
//Yo podré tener a la vez dos componentes vivos en la páginas y siempre utilizaré la misma instancia en hero service
//Un servicio es una función que tu necesitas en más de un componente. Necesitas muchas veces algo... Te creas un servicio

//Aquí testeamos el servicio
describe('HeroService', function () {
    let heroService;
    beforeEach(function () {
        heroService = new heroService();
    })


    //create hero service object
    it('should create ahero service object', function () {
        expect(heroService).toBeTruthy();
    })

    it('should get hero list', function () {
        expect(heroService.getHeroList()).toBeDefined();
        expect(heroService.getHeroList()).toEqual(heroList);
    })

    it('should get one hero by id', function () {
        const id = 14;
        //create an object with id 14
        const hero = heroList.find((hero) => hero.id === id);
        // const hero = {
        //     id: 14
        // }
        expect(heroService.getHeroById(id)).toEqual(hero);
    })

    it('should get one hero by name', function () {
        const name = 'Pepe';
        //create an object with name 'Pepe'
        const hero = heroService.find((hero) => hero.name === name);
        // const hero = {
        //     name: 'Pepe'
        // }
        expect(heroService.getHeroByName(name)).toEqual(hero);
    })
})