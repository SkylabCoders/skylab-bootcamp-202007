function HeroListComponent() {

    const hero = heroList;
    this.onInIt = function () {
        const domList = document.querySelector('.container');
        domList.innerHTML = renderHeroList(hero);
    }
    function renderHeroList(arrayHero) {
        let heroLink = '../hero-detail/hero-detail.component.html';
        let newList = arrayHero.map(function (hero) {
            let anchor = `<a href='${heroLink}?heroId=${hero.id}'>${hero.id}<span>${hero.name}</span></a>`;
            return anchor;
        });
        return newList.join('');
    }
}

const heroListComponent = new HeroListComponent();
heroListComponent.onInIt();