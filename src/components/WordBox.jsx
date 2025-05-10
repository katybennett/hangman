function WordBox(props) {
  const { wordToGuess } = props;

  return (
    <div id="word-box">
      {wordToGuess.split("").map((char, i) => {
        return (
          <span key={i} className="word-char">
            _
          </span>
        );
      })}
    </div>
  );
}

export default WordBox;
