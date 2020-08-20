const ROUTES = {
  home: { path: '/', title: 'dashboard', page: 'dashboard', nav: false },
  dashboard: { path: '/', title: 'dashboard', page: 'dashboard', nav: true },
  heroes: { path: '/heroes', title: 'heroes', page: 'heroes', nav: true },
  hero: { path: '/heroes/', title: 'hero detail', page: 'hero-detail', nav: false }
}

module.exports = ROUTES;