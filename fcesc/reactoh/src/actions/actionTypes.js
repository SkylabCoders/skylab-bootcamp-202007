/* Este archivo recoje las acciones que hará la app con los héroes */

/* 
example actions, CRUD pattern:

UPDATE_USER
CREATE_USER
DELETE_USER
GET_USER

UPDATE_HERO
CREATE_HERO
DELETE_HERO
GET_HERO

UPDATE_HERO_LIST
GET_HERO_LIST
*/

// Filosofía, crear una sóla vez y luego extender los ficheros según se necesite


/* Al no tener nombre el export cogerá el nombre del fichero */
const actionTypes = {
    UPDATE_HERO: 'UPDATE_HERO',
    CREATE_HERO: 'CREATE_HERO',
    LOAD_HERO_BY_ID: 'LOAD_HERO_BY_ID',
    LOAD_HERO_LIST: 'LOAD_HERO_LIST',
    LOAD_PAGINATED_HERO_LIST: 'LOAD_PAGINATED_HERO_LIST'
}

export default actionTypes;