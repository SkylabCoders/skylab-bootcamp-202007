import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
import axios from 'axios';

/* Las funciones sonn action creators */
export function loadHeroes(){
    return axios.get('/api/heroes')
        .then(data => {
            dispatcher.dispatch({
                type: actionTypes.LOAD_HERO_LIST,
                data: data.data
            })
        })
        .catch((err)=>{console.log(err);})
}

export function updateHero(hero){
    return axios.patch(`/api/heroes/${hero._id}`)
        .then(hero => {
            dispatcher.dispatch({
                type: actionTypes.UPDATE_HERO,
                data: hero
            })
        })
        .cath((err)=>{console.log(err)})
}

export function createHero(hero){
    return axios.post('/api/heroes')
        .then(hero =>{
            dispatcher.dispatch({
                type: actionTypes.CREATE_HERO,
                data: hero
            })
        })
        .cath((err)=>{console.log(err)})
}

export function loadPaginatedHeroes(page, itemsPerPage){
    let result = [];
    let start = page*itemsPerPage;
    let end = start + itemsPerPage;

    return axios.get('/api/heroes')
        .then(data => {
            const heroes = data.data;
            const result = [];
            for ( let i=start; i<end; i++ ){
                if(heroes[i] !== undefined){ result.push(heroes[i]) }
            }
            // console.log('AQUI - LOADPAGINATEDHEROES ACTION ENTERED WITH', result);
            dispatcher.dispatch({
                type: actionTypes.LOAD_PAGINATED_HERO_LIST,
                data: result
            })
        })
        .catch(error=>{console.log(error)});
}

export function loadHeroById(_id){
    console.log('entering loadHeroById');
    return axios.get(`/api/heroes/${_id}`)
        .then(data =>{
            console.log('AQUI LOS DATOS BACKEND', data);
            const hero = data.data;
            dispatcher.dispatch({
                type: actionTypes.LOAD_HERO_BY_ID,
                data: hero
            })
        })
        .catch(error=>{console.log(error)});
}

export function deleteHeroById(_id){
    return axios.delete(`/api/heroes/${_id}`)
        .then(data =>{
            dispatcher.dispatch({
                type: actionTypes.DELETE_HERO,
                data: _id
            })
        })
        .catch(error=>{console.log(error)});
}

