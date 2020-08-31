import React, { useEffect, useState } from "react";
import { loadCards } from "../actions/actions";
import cardStore from "../stores/cardsStore";
import "./App.css";


function App() {
  const [cards, setCards] = useState(
    cardStore.getCards()
  );


  useEffect(() => {
    cardStore.addChangeListener(onChange);
    setCards(cardStore.getCards());
    if (cards.length === 0) loadCards();
    return () => cardStore.removeChangeListener(onChange);
  }, [cards.length]);

  function onChange() {
    setCards(cardStore.getCards());
  }

  


  return (
    <>
      {cards.map((card) => (
        <div>
          <h1>{card.teams[0].city}</h1>
        </div>
      ))}
    </>
  );
}

export default App;
