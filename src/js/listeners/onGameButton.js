/* global document */

import $on from '../utils/setListener';

export default (game) => {
  const startButton = document.getElementById('start-game');

  const replayWord = () => {
    game.replayWord();
  };

  const startGame = () => {
    game.startGame();
    startButton.innerText = '⟳ Repeat';
    startButton.removeEventListener('click', startGame);
    $on(startButton, 'click', replayWord);
  };

  (function gameButton() {
    $on(startButton, 'click', startGame);
  }());
};
