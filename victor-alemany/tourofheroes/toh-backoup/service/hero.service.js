class HeroService{
     
    /* getHeroList(){
        return new Promise((resolve) => {
                resolve(heroList);
        });
    } */

    getHeroList(){
        return fetch('../heroList.json').then((response =>{
            return response.json();
        })); //nos devuelve una promesa que deberá ser llamada desde el componente que llama a esta función
    }

    /* getHeroById(id){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                const response = resolve(heroList.find((hero) => hero.id === id));
                response 
                    ? resolve(response) 
                    : reject('There is no hero widh id:' + id);
            },2000);
        } );
    } */

    getHeroById(id){
        //setTimeout(fetch('../heroList.json'),2000)

        return fetch('../heroList.json')
        .then((response) =>{return response.json()})
        .then((response) => {
        let hero = response.find((hero) => hero.id === id)
            if(!hero) throw 'Ops! Ha ocurrido un error!! Heroe no encontrado';
            return hero;
        })
        

        
        //.catch(`No se ha encontrado el heroe con id: ${id}`);
    }

    getHeroByName(name){
        return fetch('../heroList.json')
        .then((response) =>{return response.json()})
        .then((response) => {
        let hero = response.find((hero) => hero.name === name)
            if(!hero) throw 'Ops! Ha ocurrido un error!! Heroe no encontrado';
            return hero;
        })
        //return heroList.find(hero => hero.name === name);
    }
}

const heroService = new HeroService();