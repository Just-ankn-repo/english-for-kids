/* global Audio document */

import $on from '../../utils/setListener';
import $event from '../../handler';

export default {
  onFlipButton(_buttons) {
    _buttons.forEach((element) => {
      $on(element, 'mousedown', (event) => {
        document.querySelector(`#${event.target.id}.word-item__container`).classList.add('flip');
      });
      $on(document.querySelector(`#${element.id}.word-item__container`), 'mouseleave', (event) => {
        event.target.classList.remove('flip');
      });
    });
  },

  onPLay(_cards) {
    _cards.forEach((element) => {
      $on(element, 'click', (event) => {
        if (event.target.className !== 'flip-button' && event.target.classList.contains('train')) {
          const speech = new Audio(`assets/data/categories/${element.id}.mp3`);
          speech.play();
        } else if (event.target.classList.contains('play') && document.getElementById('play-replay-button').classList.contains('replay')) {
          $event.sendEvent('checkAnswer', event.target.id);
        }
      });
    });
  },

  onStartGame(_button, _category) {
    $on(_button, 'click', function startGame(_event) {
      $event.sendEvent('playGame', _category);
      const event = _event;
      event.target.classList.replace('start', 'replay');
      event.target.innerText = '↻  Replay';
      _button.removeEventListener('click', startGame);
      $on(event.target, 'click', () => {
        $event.sendEvent('replayWord');
      });
    });
  },

  onEndGame() {
    setTimeout(() => {
      document.location.hash = '#categories/';
      $event.sendEvent('changeAppMode');
    }, 5000);
  },
};
