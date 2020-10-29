/* global document Audio */

import $on from '../utils/setListener';

export default (controller, game) => {
  const cards = document.querySelectorAll('.page__item__background.card__front');

  const speechWord = (event) => {
    const mode = document.getElementById('header-wrapper').classList.item(1);
    const [category, word] = event.target.id.split('_');
    if (!event.target.classList.contains('page__item-flip-button') && mode === 'app__mode_train') {
      controller.setStatistic(category, word, 'trainClick');
      const speech = new Audio(`./assets/audio/${[category, word].join('/')}.mp3`);
      speech.play();
    } else if (mode === 'app__mode_play' && game.gameStarted) {
      const answerChecked = game.checkAnswer([category, word].join('/'));
      if (answerChecked[0]) {
        controller.setStatistic(category, answerChecked[1].split('/')[1], 'playTrue');
      } else {
        controller.setStatistic(category, answerChecked[1].split('/')[1], 'playFalse');
      }
    }
  };

  (function onCardClick() {
    cards.forEach((card) => {
      $on(card, 'mousedown', speechWord);
    });
  }());
};
