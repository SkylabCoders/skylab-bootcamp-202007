// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteControler');

// describe para agrupar los test
describe('Hero Controler', () => {
    let req = null;
    let res = null;
    let Hero = null;
    let controller = null;
    // creamos primer test para probar el post, que devuelve un héroe. recibe una req y un ares, toma las propiedades, crea un nuevo héroe, responde con un estado de 201 y un json de héroe (esto es leer el archivo donde está el post)
    describe('POST', () => {
        beforeEach(() => {
            // qué podemos preguntar de la función? qué devuelve esa función? nada porque no hay un return
            // pues lo único que podemos hacer es que, al invocarla, nos devuelva undefined porque no tiene un return
            // simplemente probamos lo que sale de la función, el return. lo que hay dentro me da igual.
            // le hemos puesto un return, que funcionará igual (eso es el test unitario = solo mira y se centra en el qué sale de la función)
            // pensar los shoulds en positivo
            // podemos hacer que si no le pasa un name no cree el usuario solo pasando el id (que es lo que pasa ahora)

            // vamos a tirar de los mocks para poder testear y saber si llegan las cosas. necesitamos estas 3 const para preparar el escenario (si las necesitáramos en más test/its pues ya lo pondríamos en un beforeEach)
            Hero = function heroConstructor() {
                // nos ad igual lo que haga esta función porque solo nos importa lo que devuelve la función
                // this porque es una función constructora
                this.save = () => {}
            };

            req = {
                body: {}
            };

            // resonse tiene el status, que es un a función y el json
            res = {
                // vamos a espiar el comportamiento de una función
                // nos interesa todo lo de la respuesta
                status: sinon.spy(),
                json: sinon.spy(),
                send: sinon.spy()
            };

            // cómo puedo acceder al método post? creando const controller
            controller = heroesController(Hero);

            controller.post(req, res);
            
        })
        
        it('should respond status 400 when name is missing', () => {
            // ahora podemos decir que estatus ha sido llamado con status 201
            // si no hay un nombre mostramos mensaje 400 - arriba a const req le quitamos el nombre y dejamos un objeto vacío
            // eslint-disable-next-line no-undef
            res.status
            .calledWith(400)
            .should.equal(true, 'Bad status, name is not required in this scenario');

            // eslint-disable-next-line no-undef
            res.send
            .calledWith('Name is required!')
            .should.equal(true, 'Message is not correct')
        });

        it('should respond status 201 when req.body has a name', () => {
            req.body.name = 'Gerard';
            controller.post(req, res);

            res.status
            .calledWith(201)
            .should.equal(true, 'Message is correct')
            
            // res.json.called().should.equal(true);
        });
    });   
    


    
    // si no hay query, se pide toda la lista
    describe('GET', () => {
            beforeEach(() => {
                Hero = function heroConstructor() {
                    this.save = () => {}
                };
        
                req = {
                    body: {},
                    query: {
                        id: null
                    }
                };
    
                res = {
                    status: sinon.spy(),
                    json: sinon.spy(),
                    send: sinon.spy()
                };
        
                controller = heroesController(Hero);      
            })

        // el estado 200 es todo correcto, 201 es creado
        // 302 no found
        it('should respond 400 when query is missing', () => {
            res.status.calledWith(400).should.equal(true, 'Algo')
           
        })
    })
});

