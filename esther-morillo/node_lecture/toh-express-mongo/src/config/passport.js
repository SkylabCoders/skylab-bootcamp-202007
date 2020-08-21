const passport = require('passport');


// estrategias de autenfificación (+480) - usaremos passport-local
require('./strategies/local.strategy')

// exportamos una función (igual que con las rutas) que configure passport en nuestra aplicación. Si exportamos una aplicación, en index le pasamos (app) ---> require('./src/config/passport')(app);
function passportConfig(app) {
    app.use(passport.initialize());
    // iniciar la sesión virtual (es diferente al expressSesion de index)
    app.use(passport.session());

    // hay que ALMACENAR el usuario en la sesión
    passport.serializeUser((user, done) => {
        // callback con primero el error y luego la data (si una función pone que retorna void es que está vacía, no retorna nada)
        done(null, user);
    })

    // y recuperar el usuario de la sesión
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}

// exportamos aquí y está invocada en index
module.exports = passportConfig;