function WordBox(props) {
  const { wordToGuess } = props;

  if (!wordToGuess) {
    return <div>Click to Start the game</div>;
  }

 
  return (
    <div id="word-box">
      {wordToGuess.split("").map((char) => {
        return <span className="word-char">_</span>;
      })}
    </div>
  );
}

export default WordBox;
