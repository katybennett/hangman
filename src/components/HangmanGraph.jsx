import { hangmanStages, INITIAL_LIVES } from "../constants";

function HangmanGraph(props) {
  const { livesRemaining } = props;

  const index = INITIAL_LIVES - livesRemaining;

  return (
    <div id="hangman-image">
      <pre>{hangmanStages[index]}</pre>
    </div>
  );
}

export default HangmanGraph;
