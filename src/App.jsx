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
  const [guessedLetters, setGuessedLetters] = useState([]);

  const handleStartNewGameClick = () => {
    const word = selectRandomWord();
    setWordToGuess(word);
    setGameStarted(true);
  };

  const handleClickLetter = (event) => {
    console.log(event.target.value)
    const letter = event.target.value;
    setGuessedLetters([...guessedLetters, letter]);
  };

  return (
    <>
      <div>
        <h1>Hangman</h1>
        <button onClick={handleStartNewGameClick}>Start New game</button>
        {gameStarted && (
          <div>
            <WordBox wordToGuess={wordToGuess} />
            <Keyboard
              guessedLetters={guessedLetters}
              onClickLetter={handleClickLetter}
            />
          </div>
        )} 
      </div>
    </>
  );
}

export default App;
