var req = new XMLHttpRequest();
req.open('GET', 'https://api.boardgameatlas.com/api/search?name=Catan&client_id=JLBr5npPhV', true);
req.onreadystatechange = function () {
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(JSON.parse(req.responseText));
     else
      console.log("Error loading page\n");
  }
};
req.send(null); 


var data = JSON.stringify({
    name: 'Gilberto',
    surname: 'Betho',
    email: 'gilbet@gmail.com',
    password: '123123123'

})

function call(method, url, body, headers, callback) {
    var xhr = new XMLHttpRequest()

    xhr.open(method, url)

    if (headers)
        for (const key in headers)
            xhr.setRequestHeader(key, headers[key])

    xhr.onload = function () {
        callback(undefined, this.status, this.responseText)
    }

    xhr.onerror = function () {
        callback(new Error('network error'))
    }

    xhr.send(body ? body : undefined)
}


    





const getboard = function(){
fetch("https://api.boardgameatlas.com/api/search?name=Catan&hV")
    .then(response => response.json())
    .then(board => console.log(board))
    .catch(error => console.error(error.message))
}

const addUser = function(){
    fetch("http://localhost:8080/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Gilberto',
            surname: 'Betho',
            email: 'gilbet@gmail.com',
            password: '123123123'

        })
    }).then(response => console.log(response.status))
    .catch(error=> console.error(error))
}

const deleteRecipe = function() {
    fetch("http://localhost:8080/api/deleterecipe", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjAzNjk3NTg1MmRjNDAxZmI3NmJlOWUiLCJpYXQiOjE1OTYzOTM0MzEsImV4cCI6MTU5NjQ3OTgzMX0.K32sF0OTdugOr3QErjJAuXWi51AAv2fPEvreaoYXd6w"
    },
    body: JSON.stringify({
        recipeId : "5f057b058cb98618dba4d5b4"
    })

    
}).then(response => console.log(response.status))
.catch(error => console.error(error))
}


https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP

https://restfulapi.net/http-methods/


