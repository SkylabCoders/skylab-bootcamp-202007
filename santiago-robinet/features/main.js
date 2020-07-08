function showDate(){
    document.getElementById('demo').innerHTML = Date();
}

function userName(){
    let userName = prompt(`Tell me your name and I'll tell you who you are.`);
    if(userName){
        document.getElementById('name-demo').innerHTML = userName;
    } else {
        userName();
    }
}

function magic(){
    showDate();
    userName();
}