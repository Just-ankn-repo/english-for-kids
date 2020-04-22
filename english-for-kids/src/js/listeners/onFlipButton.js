/* global document */

import $on from '../utils/setListener';

export default () => {
  const flipButtons = document.querySelectorAll('.page__item-flip-button');

  const afterFlipCard = (event) => {
    event.fromElement.classList.remove('flip');
    event.target.removeEventListener('mouseleave', afterFlipCard);
  };

  const flipCard = (event) => {
    const card = document.querySelector(`.page__item.word-card#${event.target.id}`);
    card.classList.add('flip');
    $on(card, 'mouseleave', afterFlipCard);
  };

  (function onFlipButton() {
    flipButtons.forEach((button) => {
      $on(button, 'mousedown', flipCard);
    });
  }());
};
