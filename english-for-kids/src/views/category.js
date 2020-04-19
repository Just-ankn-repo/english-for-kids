/* eslint-disable class-methods-use-this */
/* global document Audio */
import $category from './templates/category';
import $categoryListeners from './listeners/categoryListeners';


export default class Category {
  constructor() {
    this.mode = 'train';
    this.selfObj = undefined;
    this.categoryTemplate = $category;
    this.categoryListeners = $categoryListeners;
    this.cardsBackground = undefined;
    this.data = [];
    this.category = '';
    this.cardsPlay = undefined;
    this.flipButtons = undefined;
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.cardsBackground.forEach((card) => {
        card.classList.replace(this.mode, _mode);
        card.firstElementChild.classList.replace(this.mode, _mode);
      });
      document.querySelectorAll('.word-item').forEach((element) => {
        const elem = element;
        elem.id = `text_${_mode}`;
      });
      document.getElementById('play-mode__container').classList.replace(this.mode, _mode);
      if (_mode === 'train') {
        document.getElementById('score-container').innerHTML = '';
        document.getElementById('play-replay-button').classList.replace('replay', 'play');
        document.getElementById('play-replay-button').innerText = 'Play';
        document.querySelectorAll('.lock__element').forEach((element) => {
          element.remove();
        });
      }
      if (_mode === 'play') {
        this.categoryListeners.onStartGame(document.getElementById('play-replay-button'), this.category);
      }
      this.mode = _mode;
    }
  }

  playWord(_word) {
    const speech = new Audio(`assets/data/categories/${_word}.mp3`);
    speech.play();
  }

  gameAnswer(_word, _answer) {
    const stars = document.getElementById('score-container').innerHTML;
    document.getElementById('score-container').innerHTML = `
      <img class="score__star" src="./assets/img/${_answer}-star.png"></img>${stars}`;
    const speech = new Audio(`assets/audio/${_answer}-answer.wav`);
    speech.play();
    if (_answer === true) {
      const lockElement = document.createElement('div');
      lockElement.classList = 'lock__element';
      document.querySelector(`li#${_word.split('/')[1]}`).prepend(lockElement);
    }
  }

  renderEndGame(_answers) {
    let end = '';
    if (_answers === 0) {
      end = 'Congrats, you win!';
      const speech = new Audio('assets/audio/applaus.wav');
      speech.play();
    } else {
      end = `Sorry, you lose.\n Incorrect answers: ${_answers}`;
      const speech = new Audio('assets/audio/lose.mp3');
      speech.play();
    }
    this.selfObj.innerHTML = `
      <div class="end-game__container">
        <img class="end-game__picture" src="./assets/img/${_answers === 0}-end-game.png"></img>
        <p class="end-game__fail-rate">${end}</p>
      </div>
    `;
    this.categoryListeners.onEndGame();
  }

  render(_mode, _data, _category) {
    this.data = _data || this.data;
    this.category = _category || this.category;
    const mainObj = document.getElementById('main');

    if (this.selfObj !== mainObj) {
      if (mainObj !== null) mainObj.remove();
      this.selfObj = document.createElement('main');
      this.selfObj.id = 'main';
      document.getElementById('nav').after(this.selfObj);
    }

    this.selfObj.innerHTML = this.categoryTemplate(_mode, this.data, this.category);

    this.cardsBackground = document.querySelectorAll('.word-item__background');
    this.cardsPlay = document.querySelectorAll('.word');
    this.flipButtons = document.querySelectorAll('.flip-button');

    this.categoryListeners.onFlipButton(this.flipButtons);
    this.categoryListeners.onPLay(this.cardsPlay);
    if (_mode === 'play') {
      this.categoryListeners.onStartGame(document.getElementById('play-replay-button'), this.category);
    }
  }
}
