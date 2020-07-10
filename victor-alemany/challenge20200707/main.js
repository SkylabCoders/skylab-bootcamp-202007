function getLogin (){

    var sessionStatus = document.getElementById('loginButton').innerHTML;

    if(sessionStatus === 'Login'){
        document.getElementById('loginButton').innerHTML = "Logout";
    }
    else{
        document.getElementById('loginButton').innerHTML = "Login";
    }
}