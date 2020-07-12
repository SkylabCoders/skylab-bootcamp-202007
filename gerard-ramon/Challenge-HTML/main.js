var logInButton = document.querySelector(".navBar__button");
var navBarMenu = document.querySelector(".navBar__menu");

// ########### FUNCTIONS ##############

function switchLogIn() {
    if (logInButton.innerHTML === "Log In") {
        logInButton.innerHTML = "Log Out";
    } else {
        logInButton.innerHTML = "Log In";

    }
}

// #####################################