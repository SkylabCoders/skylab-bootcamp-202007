var button = document.querySelector('.nav__button');
var status = "1";
button.addEventListener('click', function() {
    if (status === "1") {
        button.innerHTML = 'Logout';
        status = "0";
    } else {
        button.innerHTML = 'Login';
        status = "1";
    }
});