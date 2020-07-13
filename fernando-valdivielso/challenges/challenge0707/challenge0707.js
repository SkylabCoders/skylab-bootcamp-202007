function logInOut() {
    var button = document.getElementById('log-in');
    if (button.value == 'Log in') {
        button.value = 'Log out';
        button.innerHTML = 'Log out';
    } else {
        button.value = 'Log in'
        button.innerHTML = 'Log in';
    }
}
    