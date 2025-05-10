function WordBox(props) {
  const { wordToGuess, guessedLetters } = props;

  return (
    <div id="word-box">
      {wordToGuess.split("").map((char, i) => {
        return (
          <span key={i} className="word-char">
            {guessedLetters.includes(char) ? char : "_"}
          </span>
        );
      })}
    </div>
  );
}

export default WordBox;
