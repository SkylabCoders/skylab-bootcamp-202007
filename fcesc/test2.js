/* Francesc Brugarolas - skylab bootcamp 2020207 - dia 2 */
'use strict';

let bname = document.querySelector('#button_name');
let bpname = document.querySelector('#button_pname');
let bdate = document.querySelector('#button_date');
let adate = document.querySelector('#date_area');
let btitle = document.querySelector('#button_title');
let listItems = document.querySelector('#dynamic_list');
let textarea = document.querySelector('#name_intro_area');
let namearea = document.querySelector('#name_area');
let titlearea = document.querySelector('#title_area');

bdate.addEventListener('click', () => {
    if (adate.innerHTML === ''){
        let fecha = new Date();
        adate.innerHTML = `${fecha}`;
    } else {
        adate.innerHTML = '';
    }
});

bname.addEventListener('click', () => {
    if (namearea.innerHTML === ''){
        let userName = textarea.value;
        namearea.innerHTML = `Bienvenido ${userName}`;
    } else {
        namearea.innerHTML = '';
    }
});

bpname.addEventListener('click', () => {
    if (titlearea.innerHTML === ''){
        let input = prompt('Introduce el nombre');
        namearea.innerHTML = `Bienvenido ${input}`;
    } else {
        titlearea.innerHTML = '';
    }
})

btitle.addEventListener('click', () => {
    if (titlearea.innerHTML === ''){
        titlearea.innerHTML = 'Ejercicio JS';
    } else {
        titlearea.innerHTML = '';
    }
})

