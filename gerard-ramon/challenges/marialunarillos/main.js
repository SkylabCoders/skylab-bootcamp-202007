var userPicture = document.querySelector(".navbar-user");

userPicture.addEventListener("mouseover", function() {
    userPicture.src = "assets/users_red.png"
})

userPicture.addEventListener("mouseleave", function() {
    userPicture.src = "assets/users_black.png"
})