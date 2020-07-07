var logInButton = document.querySelector(".navBar__button");
var navBarMenu = document.querySelector(".navBar__menu");

// var mediaqueryMobile = window.matchMedia("(max-width: 480px)");
// var mediaqueryDesktop = window.matchMedia("(min-width: 481px)");


// if (mediaqueryMobile.matches) {
//     navBarMenu.style.visibility = "visible";
// }

// if (mediaqueryDesktop.matches) {
//     navBarMenu.style.visibility = "hidden";
// }


// ########### FUNCTIONS ##############

function switchLogIn() {
    if (logInButton.innerHTML === "Log In") {
        logInButton.innerHTML = "Log Out"
    } else {
        logInButton.innerHTML = "Log In"

    }
}

// #####################################