function login() {

    if (document.querySelector('.nav--button').innerHTML == "Login") {
        document.querySelector('.nav--button').innerHTML = "Logout";
    } else { document.querySelector('.nav--button').innerHTML = "Login"; }

}
