function Keyboard(props) {
  const { guessedLetters, onClickLetter } = props;

  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return (
      <div>
        {alphabet.map((letter, i) => (
          <button
            onClick={onClickLetter}
            disabled={guessedLetters.includes(letter)}
            value={letter}
            key={i}
            >{alphabet[i]}
          </button>
        ))}
      </div>
  );
}

export default Keyboard;
