import { STATE } from "../constants";

function Status(props) {
  const { livesRemaining, gameState } = props;

  let message;

  if (gameState === STATE.GAME_OVER) {
    message = "You lost!";
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
