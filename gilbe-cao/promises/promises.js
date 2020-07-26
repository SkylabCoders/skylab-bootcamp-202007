'use strict';
const button = document.querySelector('.nav__button');
let status = false;
button.addEventListener('click', function () {
	if (status) {
		button.innerHTML = 'Login';
		status = false;
	} else {
		button.innerHTML = 'Logout';
		status = true;
	}
});
