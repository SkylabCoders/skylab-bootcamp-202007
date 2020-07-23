'use strict'

function HeroDetailsComponent(){
    const hero = myHero;

    this.onInit = function(){
        updateId();
        updateName();
    }

    this.nameChange = function(newName){
        hero.name = newName;
        updateName();
    }

    function updateName(){
        document.getElementById('hero-details__name').innerHTML = hero.name;
        document.getElementById('hero-detail__name-control').innerHTML = hero.name;
    }

    function updateId(){
        document.getElementById('hero-details__id').innerHTML = hero.id;
    }
}

const heroDetailsComponent = new HeroDetailsComponent();

heroDetailsComponent.onInit();
