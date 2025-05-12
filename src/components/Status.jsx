import { STATE } from "../constants";

function Status({ livesRemaining, gameState }) {
  let message;

  if (gameState === STATE.GAME_OVER) {
    message = "Game over!";
  } else if (gameState === STATE.WON) {
    message = "Congratulations, you win!";
  } else {
    message = `Lives remaining: ${livesRemaining}`;
  }

  return (
    <div>
      <span>{message}</span>
    </div>
  );
}

export default Status;
