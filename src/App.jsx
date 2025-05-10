import { useState } from "react";
import WordBox from "./components/WordBox";
import Keyboard from "./components/Keyboard";
import UserGuesses from "./components/UserGuesses";

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
    setGameStarted(!gameStarted);
  };

  const handleClickLetter = (event) => {
    const letter = event.target.value;
    setGuessedLetters([...guessedLetters, letter]);
  };
  


  return (
    <>
      <div>
        <h1>Hangman</h1>
        <button onClick={handleStartNewGameClick} disabled={gameStarted===true}>{gameStarted===true ? "Play!" : "Start New Game"}</button>
        {gameStarted && (
          <div>
            <WordBox wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
            <Keyboard
              guessedLetters={guessedLetters}
              onClickLetter={handleClickLetter}
            />
            <UserGuesses wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
          </div>
        )} 
      </div>
    </>
  );
}

export default App;
