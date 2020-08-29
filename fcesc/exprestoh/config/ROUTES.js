exports.ROUTES = [
  { path: '/', page: 'paginated-list', params: null, name: 'HOME' },
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
];

exports.ROUTES_BUILDER = {
  hero_root: '/hero/'
}