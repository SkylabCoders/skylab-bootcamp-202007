'use strict';

function loginLogout() {
    let loginStatus = document.getElementById("login").innerHTML;
    if (loginStatus === "Login") {
        document.getElementById("login").innerHTML = "Logout";
    }
    else if (loginStatus === "Logout") {
        document.getElementById("login").innerHTML = "Login";
    }
}

function showSidebar() {
        document.querySelector(".sidebar").style.display = "block";
        document.querySelector("#sidebar-close").style.display = "inline";
    }

function closeSidebar(){
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector("#sidebar-close").style.display = "none";
}

document.getElementById("login").addEventListener("click", function () {
    loginLogout();
})

document.getElementById("sidebar-open").addEventListener("click", function () {
    showSidebar();
})

document.getElementById("sidebar-close").addEventListener("click", function () {
    closeSidebar();
})