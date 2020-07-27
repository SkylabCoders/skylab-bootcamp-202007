/* Francesc Brugarolas - skylab bootcamp 202007 - challenge Tour of heroes */
'use strict';

import {HERO_LIST} from './superHeroData';

class Hero {
    constructor(){
        this.data = {
            all: HERO_LIST,
            lenght: HERO_LIST.length
        };

        this.params = {
            itemsPerPage: 20,
            currentPage: 0,
            baseURL: './heroDetail-component/heroDetail.html'
        }
        
        this.init = function init(){
            this.renderList();
        }

        this.renderList = function renderList(){
            const CONTAINER = document.querySelector('.container__list');
            const HERO_SUBSET = this.paginate();

            let hero_list = document.createElement('UL');
            hero_list.class = 'hero__list';

            for (let el of HERO_SUBSET){
                let heroItem = document.createElement('LI');
                heroItem.innerHTML = `<a href="${this.params.baseURL}/?${el.slug}">${el.id} - ${el.name}</a>`;
                hero_list.appendChild(heroItem);
            }

            CONTAINER.appendChild(hero_list);
        }

        this.paginate = function paginate(page = this.params.currentPage, itemsPerPage = this.params.itemsPerPage){
            const INITIAL_POSITION = page * itemsPerPage;
            return this.data.all.slice(INITIAL_POSITION, INITIAL_POSITION + itemsPerPage);
        }

        this.getHeroById = function getHeroById(id){

        }

        this.getHero = function getHero(searchValue, onProperty){

        }
    }
}

const HEROES = new Hero();
HEROES.init();
