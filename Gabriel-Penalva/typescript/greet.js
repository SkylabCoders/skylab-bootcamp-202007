var user = { firstN: 'gab', lastN: 'pe' };
function greet(name) {
    return "Hello " + name;
}
document.getElementById('title').innerText = greet(user);
