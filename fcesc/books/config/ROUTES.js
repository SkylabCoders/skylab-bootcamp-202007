const routes = [
  { path: '/', name: 'HOME', page: 'index.ejs', enableParams: false, type: 'page' },
  { path: '/', name: 'HEADER', page: 'header.ejs', enableParams: false, type: 'component' },
  { path: '/', name: 'FOOTER', page: 'footer.ejs', enableParams: false, type: 'component' },
  { path: '/books', name: 'BOOKS', page: 'books.ejs', enableParams: false, type: 'component' }
];

const ROUTES = new Map();

for(let route of routes){
  ROUTES.set(route.name, route);
}

module.exports.ROUTES = ROUTES;