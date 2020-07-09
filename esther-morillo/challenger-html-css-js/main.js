var buttonLogin = document.querySelector('.menu__button');
var iconMenu = document.querySelector('.icon-menu');
var mainMenu = document.querySelector('.main-menu');

function login() {
    if(buttonLogin.textContent === 'Login') buttonLogin.textContent = 'Logout';
    else buttonLogin.textContent = 'Login';
}

iconMenu.addEventListener('click', function() {
    mainMenu.classList.toggle('main-menu--show')
})