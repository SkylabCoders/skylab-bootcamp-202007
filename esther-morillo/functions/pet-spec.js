describe('Pet', function () {
    // Primero declarar las variable del objeto que usaré
    let myPet = new Pet();
    let name = 'Kira';
    let pet = {
        name: 'Kira'
    };
    let newName = 'Pepa';

    //El beforeEach sirve para ejecutar todo y que no se repita nada

    //Mirar escenario 1 y escribir lo que dice: Cuando yo le paso el nombre
    it('should create a new pet', function () {
        //Pongo name, que es la variable escrita en el escenario 1. Y hay que declararla arriba y le pongo el nombre que me dan
        expect(myPet.createPet(name)).toEqual(pet);
    });

    //Con todo lo de arriba ya tenemos el primer escenario
    //Ahora segundo escenario
    it('should return pet name', function () {
        //Antes de preguntar el nombre hay que crearlo
        //Hay que garantizar que exista un nombre para pedir el nombre
        //Los it son independientes y hay que pasarles todo porque se ejecutan de forma aleatoria
        myPet.createName('Kira');
        expect(myPet.getName()).toEqual(name);
    });

    //Hacemos el set del name:
    it('should change the pet name', function () {
        // Espero el nombre y lo voy a comparar 
        //Y volvemos a poner lo que necesitamos
        myPet.create(name);
        myPet.setName(newName);
        //Y espero que el nombre de mi mascota sea igual al nuevo nombre    
        expect(myPet.getName()).toEqual(newName);
    });


    //Gender:
    it('should get de pet gender', function () {
        //Debe tener una función getGender
        //Recorremos escenarios
        myPet.createPet(name);
        //Get no recibe argumento pero sí return
        //Set recibe argumento pero no return
        expect(myPet.getGender()).toEqual(undefined); //No tenemos el género

        //Nos falta la propiedad gender
        myPet.setGender('female');
        //Declaramos female arriba o pongo el string directamente
        expect(myPet.getGender()).toEqual('female');

        myPet.setGender('male');
        expect(myPet.getGender()).toEqual('male');

        //NO PONER ESTRINGS SUELTOS EN EL CÓDIGO Y QUE SE REPITAN... HAY QUE ARREGLARLO
    });


    it('should change the gender pet', function () {
        myPet.createPet(name);
        myPet.setGender(newGender);
        //Para acceder a la propiedad uso el get
        expect(myPet.getGender()).toEqual(newGender);
    });

    //Patas 
    it('should set and get a number of legs', function () {
        myPet.createPet(name);
        // Cuando lo creo la primera vez no tengo el legs
        expect(myPet.getLegs).toBeUndefined();
        myPet.setLegs(4);
        expect(myPet.getLegs()).toEqual(4);
        myPet.setLegs(2);
        expect(myPet.getLegs()).toEqual(2);
    })
});