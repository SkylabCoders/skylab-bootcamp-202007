const routes = [
  { path: '/', name: 'HOME', page: 'home.ejs', enableParams: false, nav: true },
  { path: '/books', name: 'BOOKS', page: 'books.ejs', enableParams: false, nav: true },
  { path: '/about', name: 'ABOUT', page: 'about.ejs', enableParams: false, nav: true }
];

const ROUTES = new Map();

for(let route of routes){
  ROUTES.set(route.name, route);
}

module.exports.ROUTES = ROUTES;