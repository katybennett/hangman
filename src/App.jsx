import { useState } from "react";
import WordBox from "./components/WordBox";
import Keyboard from "./components/Keyboard";

const words = ["CHESSE", "MARATHON", "TABLE", "BISCUIT"];

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartNewGameClick = () => {
    const word = selectRandomWord();
    setWordToGuess(word);
    setGameStarted(true);
  };

  return (
    <>
      <div>
        <h1>Hangman</h1>
        <button onClick={handleStartNewGameClick}>Start New game</button>
        {gameStarted && (
          <div>
            <WordBox wordToGuess={wordToGuess} />
            <Keyboard />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
