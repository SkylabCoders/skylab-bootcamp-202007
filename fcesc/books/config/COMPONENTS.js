const components = [
  { name: 'HEADER', file: 'header.ejs' },
  { name: 'FOOTER', file: 'footer.ejs' },
  { name: 'NAV', file: 'nav.ejs' }
];

const COMPONENTS = new Map();

for (let component of components){
  COMPONENTS.set(component.name, component);
}

module.exports.COMPONENTS = COMPONENTS;