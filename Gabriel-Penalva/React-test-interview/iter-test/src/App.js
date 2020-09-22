
import React, { useState, useEffect } from 'react';
import './App.css';


function ListItem(props) {
  //devolvemos cada elemento de la lista
  return <li>{props.value}</li>;
}
function App() {

  let itemsList = false

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character", {
      "method": "GET"
    })
      .then(response => {

        response.json().then(res => {
          setIsLoaded(true)
          setItems(res);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  console.log(items)
  if (items.results) {
    itemsList = items.results.map((current) => {
      console.log(current)
      return < ListItem key={current.id.toString()} value={JSON.stringify(current)} />
    }
    )
  }

  return (
    <div className="App">
      <p>{error && error}</p>
      <ul>
        {isLoaded ? itemsList : 'error'}
      </ul>

    </div>
  );
}

export default App;
