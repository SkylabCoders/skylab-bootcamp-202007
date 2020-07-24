function HeroService() {

    this.getHeroList = function () {
        fetch('hero.json').then(response => {
            console.log(response);
        });
    }

    // this.getHeroById = function (id) {
    //     return heroList.find((hero) => hero.id === id)

    // };
    
    // this.getHeroByName = function (name) {
    //     return heroList.find((hero) => hero.name === name)
    // };
};

const service = new HeroService();
service.getHeroList();


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data