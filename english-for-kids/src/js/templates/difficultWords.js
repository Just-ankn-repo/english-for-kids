import $firstUpCase from '../utils/firstUpCase';

export default function difficultwords(_data, _mode) {
  const show = (_data[0] !== undefined) ? '' : 'style="display: none;"';
  let result = `
    <div class="page__item__game ${_mode}" ${show}>
      <div class="game__play-replay-button" id="start-game">Start game</div>
      <span class="game__score-container" id="star-container"></span>
    </div>
    <ul class="page__content" id="page-content">
  `;
  _data.forEach((_item) => {
    const wordUp = $firstUpCase(_item[1]);
    const translateUp = $firstUpCase(_item[2]);
    const word = _item[1];
    result += `<li class="page__item word-card" id="${_item[0]}_${word}">
                  <div class="page__item__background ${_mode} card__front" id="${_item[0]}_${word}">
                    <div class="page__item__content" id="${_item[0]}_${word}">
                      <img class="page__item-image" src="./assets/img/${_item[0]}/${word}.jpg">
                      <div class="page__item-text-container ${_mode}" id="${_item[0]}_${word}">
                        <p class="page__item-text" id="${_item[0]}_${word}">${wordUp}</p>
                        <span class="page__item-flip-button" id="${_item[0]}_${word}">↻</span>
                      </div>
                    </div>
                  </div>
                  <div class="page__item__background ${_mode} card__back">
                    <div class="page__item__content">
                      <img class="page__item-image" src="./assets/img/${_item[0]}/${word}.jpg">
                      <p class="page__item-text">${translateUp}</p>
                    </div>
                  </div>
              </li>`;
  });
  result += '</ul>';
  return result;
}
