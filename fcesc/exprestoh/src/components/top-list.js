const { heroStore } = requrie('./../stores/heroStore');
const { heroActions } = require('./../actions/heroActions');

if( heroStore.getHeroesList_top() === undefined ) { loadHeroesList_top(); }
const heroes_list_top = heroStore.getHeroesList_top();
console.log('AQUI', heroes_list_top);