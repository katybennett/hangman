import { hangmanStages, hangmanFree, INITIAL_LIVES, STATE } from "../constants";

function HangmanGraph(props) {
  const { gameState, livesRemaining } = props;

  const index = INITIAL_LIVES - livesRemaining;

  return (
    <div id="hangman-image">
      <pre>{gameState === STATE.WON ? hangmanFree[0] : hangmanStages[index]} </pre>
    </div>
  );
}

export default HangmanGraph;
