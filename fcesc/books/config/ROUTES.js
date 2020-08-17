const routes = [
  { path: '/', name: 'HOME', page: 'index.html', enableParams: false, type: 'page' },
  { path: '/', name: 'HEADER', page: 'header.html', enableParams: false, type: 'component' },
  { path: '/', name: 'FOOTER', page: 'footer.html', enableParams: false, type: 'component' },
  { path: '/books', name: 'BOOKS', page: 'books.html', enableParams: false, type: 'component' }
];

const ROUTES = new Map();

for(let route of routes){
  ROUTES.set(route.name, route);
}

module.exports.ROUTES = ROUTES;