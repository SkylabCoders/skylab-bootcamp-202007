function HeroService() {

    this.getHeroList = function () {
        //Tengo que retornar una lista, qué es una lista? un array
        //No quiero qu eme retorne una lista, sino el JSON
        fetch('http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=xml&tzshift=0').then((response) => {
            console.log(response)
        });
    }


    this.getHeroById = function (id) {
        return heroList.find((hero) => hero.id === id);
    }

    this.getHeroByName = function (name) {
        return heroList.find((hero) => hero.name === name);
    }
}

const service = new HeroService()
service.getHeroList();