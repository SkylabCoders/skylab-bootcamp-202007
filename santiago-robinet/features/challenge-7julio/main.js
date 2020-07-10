function logButton(){
    
    let innerhtml = document.getElementById("log-button").innerHTML;
    if(innerhtml === 'Log In'){
        document.getElementById("log-button").innerHTML = 'Log Out';
        document.getElementById("log-button").style.backgroundColor = 'red';
    } else {
        document.getElementById("log-button").innerHTML = 'Log In';
        document.getElementById("log-button").style.backgroundColor = 'turquoise';
    }
}