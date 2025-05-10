function WordBox(props) {
  const { wordToGuess } = props;

  return (
    <div id="word-box">
      {wordToGuess.split("").map((char) => {
        return <span className="word-char">_</span>;
      })}
    </div>
  );
}

export default WordBox;
