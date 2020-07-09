var click = document.querySelector(".menu__button");
var status = "true";
var miuStatus = "true";
click.addEventListener('click',function(){
    if(status === "true"){
        click.innerHTML = "Log Out";
        status = "false";
    }else{
        click.innerHTML = "Login"
        status = "true";
    }
})
var clickOther = document.querySelector(".main__button");
clickOther.addEventListener('click',function(){
    if(status === "true"){
        alert(`MIAUUUUUUU!!`);
    }
})
