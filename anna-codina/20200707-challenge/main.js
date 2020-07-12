function changeOnlineOffline(){
    var actualButtonStatus = document.getElementsByClassName("header-button__login-logout")[0].innerHTML;
    if (actualButtonStatus == "LOGIN"){
        actualButtonStatus = "LOGOUT";
    } else {
        actualButtonStatus = "LOGIN";
    }
    document.getElementsByClassName("header-button__login-logout")[0].innerHTML = actualButtonStatus;
}
function iLikeIt(){
    document.getElementsByClassName("main-section-section__likeButton")[0].innerHTML = "YES!";
}

function openMenu(){
    for (var i = 0 ; i < 3 ; i++){
        document.getElementsByClassName("header-nav-ul-li__urlLink")[i].classList.add("display-inline");
        document.getElementsByClassName("header-nav-ul-li__urlLink")[i].classList.remove("display-none");
    }
}