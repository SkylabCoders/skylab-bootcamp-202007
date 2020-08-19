const SKYLABROUTES = [
  { path: '/', page: 'home.ejs', params: null, name: 'HOME', nav: true },
  { path: '/skylabers', page: 'skylabers.ejs', params: false, name: 'SKYLABERS', nav: true },
  { path: '/skylaber/:skylaberId', page: 'skylaber.ejs', params: 'skylaberId', name: 'SKYLABER', nav: false },
  { path: '/skylaber/create', page: 'skylaber_create.ejs', params: false, name: 'CREATE_SKYLABER', nav: false },
  { path: '/skylaber/edit/:skylaberId', page: 'skylaber_edit.ejs', params: 'skylaberId', name: 'EDIT_SKYLABER', nav: false },
  { path: '/skylabers/top', page: 'skylabers.ejs', params: false, name: 'TOP', nav: true }
];

module.exports = SKYLABROUTES;

/*
  { path: '/edit', page: 'edit', params: null, name: 'HERO_EDIT' },
  { path: '/search', page: 'search', params: null, name: 'SEARCH' },
  { path: '/hero/:heroId', page: 'hero-detail', params: 'heroId', name: 'HERO_DETAIL' },
  { path: '/full-list', page: 'full-list', params: null, name: 'LIST_FULL' },
  { path: '/hero-list/:pageNumber', page: 'paginated-list', params: 'pageNumber', name: 'LIST_PAGINATED' },
  { path: '/top-list', page: 'top-list', params: null, name: 'LIST_TOP' },
  { path: '/api/full-list', page: 'api/full-list', params: null, name: 'API_LIST_FULL' },
  { path: '/api/paginated-list/:pageNumber', page: 'api/paginated-list/pag', params: 'pageNumber', name: 'API_LIST_PAGINATED' },
  { path: '/api/hero/:heroId', page: 'api/hero/id', params: 'heroId', name: 'API_HERO_DETAIL' },
  { path: '/api/info', page: 'api/info', params: null, name: 'API_INFO' }
*/