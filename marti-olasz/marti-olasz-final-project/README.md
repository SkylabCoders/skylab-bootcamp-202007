# The music box | Molasz

Esta app fue mi proyecto final en el bootcamp Skylab Coders Academy. La primera version de la app fue desarrollada durante 3 semanas aunque sigo con el desarrollo

La idea del proyecto era hacer una red social donde grupos de música se puedan dan a conocer, crear su propio perfil y así poder compartir su discografía, tener un listado con los próximos conciertos y algunas fotos de la banda.

Por otro lado los usuarios pueden seguir a sus grupos favoritos y compartir la música que les gusta con los demás usuarios.

## Instalando 🔧

Para instalar todas las dependencias ejecuta tanto en el directorio frontend/ como en backend/:

```
npm install
```

Tambien tendras que configurar auth0:
**Frontend**: Crea un archivo en la carpeta config con la siguiente estructura:

```
module.exports = {
  jwksUri: url,
  audience: url,
  issuer: url
};
```

**Backend**: Crea un archivo en la carpeta config con la siguiente estructura:

```
export const DOMAIN = url;
export const CLIENTID = id;
export const AUDIENCE = url;
export const SCOPE = id;

```

## Ejecutando las pruebas ⚙️

- **Frontend:** Los test del frontend estan echos con Jest.

Para ejecutarlos muevete al directorio /frontend y ejecuta:

```
npm test
```

- **Backend:** Los test del backend estan echos con Sinon.

Para ejecutarlos muevete al directorio /backend y ejecuta:

```
npm test
```

## Construido con 🛠️

Para el proyecto he usado las siguientes tecnologias

**Frontend**

- [React.js](http://www.reactjs.org) - El framework web usado
- [SASS](https://sass-lang.com/) - Preprocesador de css para los estilos
- [Redux](https://redux.js.org/) - Arquitectura de datos utilizada, basado en flux
- [Auth0](https://auth0.com/) - Autentifiacion y autorizazion
- [Jest](https://jestjs.io/) - Unit testing y component testing

**Backend**

- [Express.js](https://expressjs.com/) - El framework web usado
- [Multer](https://github.com/expressjs/multer#readme) - Middleware utilizado para guardar imagenes
- [Auth0](https://auth0.com/) - Autentifiacion y autorizazion
- [Mongoose](https://mongoosejs.com) - Comunicacion con la base de datos
- [Sinon](https://sinonjs.org/) - Unit testing testing


