function UserGuesses(props) {
  const { wordToGuess, guessedLetters } = props;

  return (
    <div id="user-guesses">
      {guessedLetters.map((letter, index) => (
        <span
          key={index}
          className={
            wordToGuess.includes(letter)
              ? "user-guesses-correct"
              : "user-guesses-incorrct"
          }
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default UserGuesses;
