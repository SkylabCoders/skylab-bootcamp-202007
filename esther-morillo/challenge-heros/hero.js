const Hero = function () {
    let dataHero = {
        name: '',
        id: null
    };

    let heroName = function () {
        return dataHero.name;
    };

    let getHeroName = function () {
        return dataHero.name;
    }

    let setHeroName = function (newHeroName) {
        dataHero.name = newHeroName;
    }

    let getHeroId = function () {
        return dataHero.id;
    }

    return {
        heroName,
        getHeroName,
        setHeroName,
        getHeroId
    }
};