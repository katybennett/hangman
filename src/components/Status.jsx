import { STATE } from "../constants";

function Status({ livesRemaining, gameState }) {
  return (
    <div>
      {gameState !== STATE.GAME_OVER ? (
        <span id="status">Lives remaining: {livesRemaining}</span>
      ) : (
        <span>Game Over!</span>
      )}
    </div>
  );
}

export default Status;
