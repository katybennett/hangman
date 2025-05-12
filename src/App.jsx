import { useEffect, useState } from "react";
import WordBox from "./components/WordBox";
import Keyboard from "./components/Keyboard";
import UserGuesses from "./components/UserGuesses";
import Status from "./components/Status";

const words = ["CHESSE", "MARATHON", "TABLE", "BISCUIT"];

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [livesRemaining, setLivesRemaining] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  

  useEffect(() => {
    if (livesRemaining === 0) {
      setIsGameOver(true);
    }
  }, [livesRemaining]);

  const handleStartNewGameClick = () => {
    const word = selectRandomWord();
    setWordToGuess(word);
    setGameStarted(!gameStarted);
    setLivesRemaining(6);
  };

  const handleClickLetter = (event) => {
    const letter = event.target.value;
    if (!wordToGuess.includes(letter)) {
      setLivesRemaining(livesRemaining - 1);
    }
    setGuessedLetters([...guessedLetters, letter]);
  };

  return (
    <>
      <div>
        <h1>Hangman</h1>
        <button
          onClick={handleStartNewGameClick}
          disabled={gameStarted === true}
        >
          {gameStarted === true ? "Play!" : "Start New Game"}
        </button>
        {gameStarted && (
          <div>
            <WordBox
              wordToGuess={wordToGuess}
              guessedLetters={guessedLetters}
            />
            <Keyboard
              isGameOver={isGameOver}
              guessedLetters={guessedLetters}
              onClickLetter={handleClickLetter}
            />
            <UserGuesses
              wordToGuess={wordToGuess}
              guessedLetters={guessedLetters}
            />
            <Status isGameOver={isGameOver} livesRemaining={livesRemaining} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
