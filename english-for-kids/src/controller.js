/* global */

import Model from './model';
import View from './view';

export default class Controller {
  constructor() {
    this.mode = 'train';
    this.model = new Model();
    this.view = new View(this.mode, this.model.getCategories());
    this.incorrectAnswers = 0;
    this.wordsForGame = [];
  }

  setPage(_toView) {
    const data = this.model[`get${_toView[0][0].toUpperCase()}${_toView[0].slice(1)}`](_toView[1]);
    this.view.render(_toView, data);
  }

  changeAppMode() {
    this.mode = (this.mode === 'train') ? 'play' : 'train';
    this.view.setMode(this.mode);
  }

  showMenu(_isShow) {
    this.view.showMenu(_isShow);
  }

  playGame(_category) {
    this.incorrectAnswers = 0;
    this.wordsForGame = [];
    this.model.getCategory(_category).forEach((word) => {
      this.wordsForGame.push(`${_category}/${word[0]}`);
    });
    this.wordsForGame.sort(() => Math.random() - 0.5);
    setTimeout(() => { this.view.playWord(this.wordsForGame[0]); }, 500);
  }

  replayWord() {
    this.view.playWord(this.wordsForGame[0]);
  }

  checkAnswer(_word) {
    this.view.gameAnswer(_word, this.wordsForGame[0] === _word);
    this.incorrectAnswers += (this.wordsForGame[0] === _word) ? 0 : 1;
    this.wordsForGame.shift();
    if (this.wordsForGame.length > 0) {
      this.wordsForGame.sort(() => Math.random() - 0.5);
      setTimeout(() => { this.view.playWord(this.wordsForGame[0]); }, 1000);
    } else {
      this.view.renderEndGame(this.incorrectAnswers);
    }
  }
}
