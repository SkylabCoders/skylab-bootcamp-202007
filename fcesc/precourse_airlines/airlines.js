/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';
/* CONFIG - DADES INICIALS */
const vols = [
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
function imprimeixVols(arr, data){
    console.log('%cMOSTRANT VOLS COMPANYIA SKYLAB PER EL ' + data.getDate() + '\/' + (data.getMonth()+1) + '\/' + data.getFullYear() + ' : ', "font-weight: bold");
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
    console.log('%c       ' + volsAmbEscala + ' vols amb escala.', 'color: teal');
    console.log('%c       ' + preuMigVol + ' € cost mitjà d\'un vol.', 'color: teal');
}

/* --------------------------------------- */

/* INTERACCIÓ USUARI */
let nom = prompt('Introdueix el teu nom per accedir al programa de gestió de reserves:');
console.log(`%cBenvingut al programa de gestió de reserves de vols de SKYLAB, ${nom}.`, 'color: teal');
imprimeixVols(vols, avui);
console.log('%cGràices per la teva visita.', 'color: teal');
/* --------------------------------------- */