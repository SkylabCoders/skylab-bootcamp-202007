"use strict";
var button = document.querySelector('.nav__button');
var status = false;
button.addEventListener('click', function() {
    debugger;
    if (!status) {
        button.innerHTML = 'Logout';
        status = true;
    } else {
        button.innerHTML = 'Login';
        status = false;
    }
});