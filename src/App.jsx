import { useEffect, useState } from "react";
import WordBox from "./components/WordBox";
import Keyboard from "./components/Keyboard";
import UserGuesses from "./components/UserGuesses";
import Status from "./components/Status";
import { STATE } from "./constants";

const words = ["CHEESE", "MARATHON", "TABLE", "BISCUIT"];

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [livesRemaining, setLivesRemaining] = useState(null);
  const [gameState, setGameState] = useState(STATE.NOT_STARTED);

  useEffect(() => {
    if (livesRemaining === 0) {
      setGameState(STATE.GAME_OVER);
    }
  }, [livesRemaining]);

  useEffect(() => {
    if (gameState === STATE.IN_PROGRESS) {
      const allLettersGuessed = wordToGuess
        .split("")
        .every((char) => guessedLetters.includes(char));

      if (allLettersGuessed) {
        setGameState(STATE.WON);
      }
    }
  }, [guessedLetters]);

  const handleStartNewGameClick = () => {
    const word = selectRandomWord();
    setWordToGuess(word);
    setGameState(STATE.IN_PROGRESS);
    setLivesRemaining(6);
    setGuessedLetters([]);
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
          disabled={gameState === STATE.IN_PROGRESS}
        >
          {gameState === STATE.IN_PROGRESS ? "Play!" : "Start New Game"}
        </button>
        {gameState !== STATE.NOT_STARTED && (
          <div>
            <WordBox
              wordToGuess={wordToGuess}
              guessedLetters={guessedLetters}
            />
            <Keyboard
              gameState={gameState}
              guessedLetters={guessedLetters}
              onClickLetter={handleClickLetter}
            />
            <UserGuesses
              wordToGuess={wordToGuess}
              guessedLetters={guessedLetters}
            />
            <Status gameState={gameState} livesRemaining={livesRemaining} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
