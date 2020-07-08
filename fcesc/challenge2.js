/* Francesc Brugarolas - Skylab Coders Bootcamp 202007 - challenge #2 */
'use strict';
const EARTHDATA = ['Distance from the SUN: 94.508.281 Mkm', 'Lenth of the year: 365 Earth days', 'One way light time to the sun: 8,455 min',
    'Earth volume: 1,083 x 10^12 km^3', 'Earth radius: 6,371 km', 'Earth surface area: 5,1 x 108 km^2', 'Earth mass: 5,972 x 10^24 kg',
    'Earth surface gravity: 9,80665 m/s^2', 'Earth escape velocity: 40.284 km/h', 'Atmospheric constituents: Nitrogen, Oxygen',
    'Estimated age: about 4,5 billion years', 'Population: 7.796.496.450 humans', 'CO2 emissions year 2020: 37.435.452.000 tons',
    'Water used per year 2020: 4.517.840.000.000.000 liters', 'Yearly lost land due to soil erosion 2020: 7.247.400 ha', 'Yearly lost forest surface 2020: 5.382.000 ha'];

function resizeVideo(){
    let videoMenu = document.querySelector('#video_columna');
    let vw = window.innerWidth;
    let width = ( (vw * 0.95) / 3) * 0.98;
    videoMenu.width = width;
    videoMenu.heigth = width * (315/560);
}
resizeVideo();
window.addEventListener('resize', () => resizeVideo());

let buttonLoginLogout = document.querySelector('#buttonLoginLogout');
buttonLoginLogout.addEventListener('click', ()=> {
    console.log('CLICK');
    if (buttonLoginLogout.innerHTML === 'LOGIN'){
        buttonLoginLogout.innerHTML = 'LOGOUT';
    } else {
        buttonLoginLogout.innerHTML = 'LOGIN';
    }
})

let buttonGoFarther = document.querySelector('#buttonGoFarther');
buttonGoFarther.addEventListener('click', ()=> {
    // do some stuff
});

let headerBoard = document.querySelector('#header_messages');

let hamburguerMenu = document.querySelector('#main_nav_hamburguer');
hamburguerMenu.addEventListener('click', () => {
    let menuItems = document.querySelector('#main_nav_horizontal');
    menuItems.
});