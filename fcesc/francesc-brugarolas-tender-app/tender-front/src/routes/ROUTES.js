const ROUTES = [
  { path: '/', title: 'home', nav: true, auth: false },
  { path: '/profile', title: 'profile', nav: true, auth: true },
  { path: '/portfolio', title:'portfolio', nav: true, auth: true },
  { path: '/project', title: 'project', nav: false, auth: true },
  { path: '/signup', title: 'register', nav: true, auth: false }
];

// path here means root path
// nav if true will display options in nav menu
// auth if true will display options only if authenticated. An unauthenticated user will see options with auth false

export default { ROUTES };