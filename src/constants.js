export const STATE = {
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  GAME_OVER: "game_over",
  WON: "won",
};

export const WORDS = ["CHEESE", "MARATHON", "TABLE", "BISCUIT"];

export const INITIAL_LIVES = 6;

export const hangmanStages = [
  "  _______\n |/      \n |        \n |        \n |        \n |        \n_|___",
  "  _______\n |/      |\n |      (_)\n |        \n |        \n |        \n_|___",
  "  _______\n |/      |\n |      (_)\n |       |\n |       |\n |        \n_|___",
  "  _______\n |/      |\n |      (_)\n |      \\|\n |       |\n |        \n_|___",
  "  _______\n |/      |\n |      (_)\n |      \\|/\n |       |\n |        \n_|___",
  "  _______\n |/      |\n |      (_)\n |      \\|/\n |       |\n |      / \n_|___",
  "  _______\n |/      |\n |      (_)\n |      \\|/\n |       |\n |      / \\\n_|___   GAME OVER",
];
