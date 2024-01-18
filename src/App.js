import React, { useEffect, useState } from 'react';
import './App.css';
import { Deck, Card } from './Types';
import { json } from 'react-router-dom';

/*
  Add Moon Phase Calendar
  Add Esoteric Clock
  Sort Cards By Sign
  Add Weight To Cards Based On Moon Phase & Sign Phase
  Add Switch weight on||off
*/

export const Shuffle = () => {
  const [deck, setDeck] = useState('') //<{Deck:null}>({Deck:null}); // Initialize as null, type Deck
  const [currentCard, setCurrentCard] = useState('') //<{id:null | string,Name:null | string,Path:null | string,Summary:null | string}>({id:null,Name:null,Path:null,Summary:null}); // Initialize as null, type Card
  //const [deck, setDeck] = useState(null)
  //const [currentCard, setCurrentCard] = useState(null)
  const fetchJson = () => {
    fetch('/Deck.json')
      .then(response => {
        const res = (response.json());
        console.log(res)
        return res;
      }).then(data => {
        console.log(data)
        setDeck(data); // Set the deck data
        // Set the first card in the deck as the current card
        if (data && data.Card.length > 0) {
          setCurrentCard(data.Card[0]);
        }
      }).catch((e: Error) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchJson();
  }, []);

  // Shuffle function
  const shuffleCards = () => {
    if (deck && deck.Card.length > 0) {
      const randomIndex = Math.floor(Math.random() * deck.Card.length);
      setCurrentCard(deck.Card[randomIndex]);
    }
  }

  // If there's no current card, don't try to render card info
  if (!currentCard) {
    return (<div>Loading...</div>);
  }

  return (
    <div>
      <div>{currentCard.Name}</div>
      <div><img src={currentCard.Path} className="App-logo" alt={currentCard.Name} /></div>
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Shuffle />
      </header>
    </div>
  );
}

export default App;
