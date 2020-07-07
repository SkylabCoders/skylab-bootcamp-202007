/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';
/* CONFIG - DADES INICIALS */
var vols = [
    { id: '00', to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false }, 
    { id: '01', to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: '02', to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: '03', to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: '04', to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: '05', to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: '06', to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: '07', to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: '08', to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: '09', to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: '10', to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
];
const avui = new (Date);
/* --------------------------------------- */

/* UTILS */
function imprimeixVols(arrayVols, data, ordre = 'id', filtre = 'all'){
    console.log('%cMOSTRANT VOLS COMPANYIA SKYLAB PER EL ' + data.getDate() + '\/' + (data.getMonth()+1) + '\/' + data.getFullYear() + ' : ', "font-weight: bold");
    let sortedArr = arrayVols.sort((a, b) => a[ordre]-b[ordre]);
    let filteredArr = sortedArr;
    if (filtre !== 'all'){
        filteredArr = sortedArr.filter(a => a[filtre[0]] === filtre[1]);
    }
    let arr = filteredArr;
    let volsAmbEscala = 0;
    let costAcum = 0;
    for (let i = 0; i< arr.length; i++){
        let resumVol = '   - CODI VOL: ' + arr[i].id + ',   PREU: ' + arr[i].cost + ' EUR';
        console.log(`%c ${resumVol}`, "color:blue");
        console.log('       ORIGEN: ' + arr[i].from + '  -  DESTI: ' + arr[i].to);
        costAcum = costAcum + arr[i].cost;
        if (arr[i].scale === false){
            console.log('       DIRECTE');
        } else {
            volsAmbEscala++;
            console.log('       VOL AMB ESCALA');
        }
    }
    let preuMigVol = (costAcum / arr.length).toFixed(2);
    console.log('%c    -> ' + arr.length + ' resultats mostrats.', 'color: teal');
    if (arr.length !== 0){
        console.log('%c       ' + volsAmbEscala + ' vols amb escala.', 'color: teal');
        console.log('%c       ' + preuMigVol + ' € cost mitjà dels vols mostrats.', 'color: teal');
    }
    return arr;
}

function imprimeixVol(vol, data){
    console.log('%cMOSTRANT VOL SELECCIONAT DE SKYLAB PER EL ' + data.getDate() + '\/' + (data.getMonth()+1) + '\/' + data.getFullYear() + ' : ', "font-weight: bold");
    let resumVol = '   - CODI VOL: ' + vol.id + ',   PREU: ' + vol.cost + ' EUR';
    console.log(`%c ${resumVol}`, "color:blue");
    console.log('       ORIGEN: ' + vol.from + '  -  DESTI: ' + vol.to);
    if (vol.scale === false){
        console.log('       DIRECTE');
    } else {
        console.log('       VOL AMB ESCALA');
    }
}

function validaUsuari(input){
    let data = input.toLowerCase();
    switch(data){
        case 'user':
        case 'admin':
            return input;
        case 'exit':
            return goodbye();
        default:
            console.log();
            return validaUsuari(requereixInfoUsuari());
    }
}

function validaOpcions(input, opcions, text){
    try{
        if (input === 'exit'){
            return goodbye();
        }
        let n = parseInt(Number(input));
        if ( (n <= opcions && n > 0) && (n !== 'Infinity' || n !== '-Infinity' || isNaN(n)) ){
            return n;
        } else {
            throw 'Error, la opció introduida no està permesa.';
        }
    } catch(err) {
        console.log(err);
        return validaOpcions(prompt(text), opcions, text);
    }
}

function validaVol(input){
    try{
        if (input === 'exit'){
            return goodbye();
        }
        let vol = vols.filter(el => el.id === input);
        if (vol[0] === undefined){
            throw 'Error, el vol seleccionat no existeix.';
        } else {
            vol = vol[0];
            return vol;
        }
    } catch(err) {
        console.log(err);
        return validaVol(requereixVol());
    }
}

function requereixInfoUsuari(){
    let input = prompt('Introdueix el teu perfil d\'usuari: admin o user:')
    return input;
}

function requereixVol(){
    let input = prompt('Introdueix el id de vol escollit:')
    return input;
}

function hello(){
    let nom = prompt('Introdueix el teu nom per accedir al programa de gestió de reserves:');
    console.log(`%cBenvingut al programa de gestió de reserves de vols de SKYLAB, ${nom}.`, 'color: teal');
    return nom;
}

function goodbye(){
    console.log(`%cGràices per la teva visita, ${nom}.`, 'color: teal');
    if (usuari === 'admin'){
        console.log(volsCreatsSessio.length + '%c vols creats aquesta sessió amb IDs: ' + volsCreatsSessio.join(', ') + '.');
        console.log(volsEliminatsSessio.length + '%c vols eliminats aquesta sessió amb IDs: ' + volsEliminatsSessio.join(', ') + '.');
    }
}

function eliminaVol(id){
    let pos = vols.findIndex(a => a.id === id);
    vols = vols.slice(0,pos).concat(vols.slice(pos +1, pos.length));
    volsEliminatsSessio.push(id);
}

function crearNouVol(vol){
    if (vols.length >= 15){
        alert('Error! El sistema no admet més de 15 vols. Contacta amb l\'administrador del sistema.');
        console.log('%cError. Sortint del sistema.', 'color: red');
        return goodbye();
    } else {
        volsCreatsSessio.push(vols.id);
        vols.push(vol);
    }
}

function validaNouVol(input){
    if (input === 'exit'){
        return goodbye();
    }
    let detall = input.split(',').map(el => el.trim());
    if ( detall.length !== 4 ){
        alert('Error en els paràmetres introduïts. Es sol·licitaran de nou.');
        return validaNouVol(requereixNouVol());
    } else {
        let cost = Number(detall[2]);
        if ( isNaN(cost) || (detall[3] !== 'false' && detall[3] !== 'true') ){
            alert('Error en els paràmetres introduïts. Es sol·licitaran de nou.');
            return validaNouVol(requereixNouVol());            
        } else {
            let escala;
            detall[3] === 'false' ? escala = false : detall[3] === 'true' ? escala = true : escala = undefined;
            let max = 0;
            for (let el of vols){
                if (Number(el.id) > max) {max = Number(el.id);}
            }
            let newId = max + 1;
            newId < 10 ? newId = '0' + newId : newId.toString();
            let vol = {
                id: newId, 
                from: detall[0], 
                to: detall[1], 
                cost: cost, 
                scale: escala
            }
            return vol;
        }
    }
}

function requereixNouVol(){
    let input = prompt('Introdueix un nou vol (id automàtic) amb format: \"ORIGEN, DESTI, COST, ESCALA\" on escala és true si té escala i false en cas contrari:');
    return input;
}
/* --------------------------------------- */

/* INTERACCIÓ USUARI */
var volsFiltres;
const volsEliminatsSessio = [];
const volsCreatsSessio = [];

function menuUsuari(){
    let text = 'OPCIONS   1: ordenar vols per preu   2: mostrar només vols directes   3: mostrar tots els vols   4: seleccionar un vol   5: per sortir ';
    let input = validaOpcions(prompt(text), 5, text);
    switch(input){
        case 1: case 3:
            console.clear();
            imprimeixVols(vols, avui, 'cost', 'all');
            return menuUsuari();
        case 2: 
            console.clear();
            volsFiltres = imprimeixVols(vols, avui, 'cost', ['scale', false]);
            return menuUsuari();
        case 4:
            let vol = validaVol(requereixVol());
            console.clear();
            imprimeixVol(vol, avui);
            console.log('%cGràces per la teva compra, torni aviat.', 'color: teal');
            return goodbye();
        case 5:
            return goodbye();
    }
}

function menuAdmin(){
    let text = 'OPCIONS   1: crear vol   2: eliminar vol   3: per sortir ';
    let input = validaOpcions(prompt(text), 3, text);
    let vol;
    switch(input){
        case 1:
            console.clear();
            vol = validaNouVol(requereixNouVol());
            crearNouVol(vol);
            imprimeixVol(vol, avui);
            console.log('%cVol creat satisfactòriament al sistema', 'color: teal');
            imprimeixVols(vols, avui, 'id', 'all');
            return menuAdmin();
        case 2:
            vol = validaVol(requereixVol());
            console.clear();
            imprimeixVol(vol, avui);
            let id = vol.id;
            eliminaVol(id);
            console.log(`%cVol ${id} eliminat del sistema`, 'color: teal');
            imprimeixVols(vols, avui, 'id', 'all');
            return menuAdmin();
        case 3:
            return goodbye();
    }
}
/* --------------------------------------- */

/* PROGRAMA */
const nom = hello();

imprimeixVols(vols, avui, 'id', 'all');

const usuari = validaUsuari(requereixInfoUsuari());
switch (usuari){
    case 'admin': 
        menuAdmin();
        break;
    case 'user':
        menuUsuari();
        break;
}
/* --------------------------------------- */