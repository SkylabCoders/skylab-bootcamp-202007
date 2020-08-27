const heroes = require('./heroes');

const nav = [
    { link: '/', title: 'Dasboard' },
    { link: '/heroes', title: 'myheroes' }
];
const routes = [
    {
        file: 'dashboard',
        pathF: '/',
        title: 'Top Heros',
        info: heroes.slice(0, 4),
        nav

    }, {
        file: 'heroes',
        pathF: '/heroes',
        title: 'Hero List',
        info: heroes,
        nav
    }
    , {
        file: 'hero-detail',
        pathF: '/heroes/:heroid',
        title: 'Details',
        info: heroes,
        nav
    }
];
exports.routes = routes;