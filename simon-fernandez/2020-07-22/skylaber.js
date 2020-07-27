/* 
Description

un skylaber tiene nombre que es ... tiene motivacion que es un valor de array de strings, tiene direccion y tiene un profesor preferido de un array con los 3 profesores 

 hacer la funcion contructora y ademas hacer 3 skylabers diferentes
*/

function skylaber(name, motivacion, direccion, profesor) {
  this.name = name;
  this.motivacion = motivacion;
  this.direccion = direccion;
  this.profesorFavorito = profesor;
}

const motivacion = ['masoquismo', 'ladron de zapatillas', 'Gilberto'];
const profesor = ['Gilberto', 'Jorge', 'Beto'];
function direccion(ciudad, pais) {
  this.ciudad = ciudad;
  this.pais = pais;
}
const Gerard = new skylaber(
  'Gerard',
  motivacion[2],
  new direccion('Granollers', 'España'),
  profesor[0]
);
const Santi = new skylaber(
  'Santi',
  motivacion[0],
  new direccion('Ciudad de la plata', 'Argentina'),
  profesor[2]
);

const Fernando = new skylaber(
  'Fernando',
  motivacion[1],
  new direccion('Madrid', 'España'),
  profesor[1]
);
console.log(Gerard);
console.log(Santi);
console.log(Fernando);
