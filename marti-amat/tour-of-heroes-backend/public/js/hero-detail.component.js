'use strict'


function HeroDetailComponent() {
    let hero = null;
    this.onInit = function () {
        readId();
        updateId();
        updateName();
    };

    this.nameChange = function (newName) {
        hero.name = newName;
        updateName();
    };

    function updateId() {
        document.getElementById('hero-detail__id').innerHTML = hero.id;
    }

    function updateName() {
        document.getElementById('hero-detail__name').innerHTML = hero.name;
        document.getElementById('hero-detail__name-control').value = hero.name;
    }
    function readId() {
        const params = new URLSearchParams(location.search);
        const id = +params.get('heroId');
        hero = LIST_HEROES.find(function (hero) {
            return hero.id === id;
        });
    }
}

try {
    const heroDetailComponent = new HeroDetailComponent();
    heroDetailComponent.onInit();
} catch (error) {
    console.log('Hi testers ==> ', error);
}



