import { useState } from "react";
import WordBox from "./components/WordBox";

const words = ["CHESSE", "MARATHON", "TABLE", "BISCUIT"];

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

function App() {

  const [wordToGuess, setWordToGuess] = useState(null);

  const handleStartNewGameClick = () => {
    const word = selectRandomWord();
    setWordToGuess(word);
  };


  return (
    <>
      <div>
        <h1>Hangman</h1>
        <WordBox wordToGuess={wordToGuess} />
        <button onClick={handleStartNewGameClick}>Start New game</button>
      </div>
    </>
  );
}

export default App;
