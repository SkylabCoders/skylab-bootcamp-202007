const ROUTES = {
  home: { path: '/', title: 'dashboard', page: 'dashboard', nav: false },
  dashboard: { path: '/', title: 'dashboard', page: 'dashboard', nav: true },
  heroes: { path: '/heroes', title: 'heroes', page: 'heroes', nav: true },
  hero: { path: '/heroes/', title: 'hero detail', page: 'hero-detail', nav: false },
  signin: { path: '/auth/signin', title: 'sign in', page: 'signin', nav: false },
  signup: { path: '/auth/signup', title: 'sign up', page: 'signup', nav: false },
  signout: { path: '/auth/signout', title: 'sign out', page: 'signout', nav: false },
  profile: { path: '/auth/profile', title: 'user profile', page: 'profile', nav: false }
}

module.exports = ROUTES;