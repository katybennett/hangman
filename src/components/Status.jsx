function Status({ livesRemaining, isGameOver }) {
  return (
    <div>
      {!isGameOver ? (
        <span id="status">Lives remaining: {livesRemaining}</span>
      ) : (
        <span>Game Over!</span>
      )}
    </div>
  );
}

export default Status;
