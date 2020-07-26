/* Francesc - Skylab Bootcamp 202007 - challenge #3 */
'use strict';
function resizeVideo(){
    let videoMenu = document.querySelector('#video_fluid');
    let vw = window.innerWidth;
    let width = vw * 0.7 * 0.9;
    console.log('width: ', width);
    if (width > 1000){ width = 1000;}
    videoMenu.width = width;
    videoMenu.heigth = width * (315/560);
}
resizeVideo();
window.addEventListener('resize', () => resizeVideo());