const ROUTES = {
  home: { path: '/', title: 'dashboard', page: 'dashboard', nav: false },
  dashboard: { path: '/', title: 'dashboard', page: 'dashboard', nav: true },
  products: { path: '/products', title: 'products', page: 'products', nav: true },
  product: { path: '/products/', title: 'product detail', page: 'product-detail', nav: false },
  adminProducts: { path: '/admin/products', title: 'products', page: 'products', nav: true },
  adminProduct: { path: '/admin/products/', title: 'product detail', page: 'admin-product-detail', nav: false },
  signin: { path: '/auth/signin', title: 'sign in', page: 'signin', nav: false },
  signup: { path: '/auth/signup', title: 'sign up', page: 'signup', nav: false },
  signout: { path: '/auth/signout', title: 'sign out', page: 'signout', nav: false },
  profile: { path: '/auth/profile', title: 'user profile', page: 'profile', nav: false },
  chart: { path: '/chart', title: 'chart', page: 'chart', nav: true },
  aside: { path: '/', title: 'aside', page: 'aside', nav: false }
}

module.exports = ROUTES;