/* global document Audio */

export default class Game {
  constructor(view) {
    this.view = view;
    this.wordsForGame = [];
    this.speech = undefined;
    this.correctSound = new Audio('./assets/audio/correct.wav');
    this.incorrectSound = new Audio('./assets/audio/incorrect.wav');
    this.winEndGameSound = new Audio('./assets/audio/applaus.wav');
    this.loseEndGameSound = new Audio('./assets/audio/lose.mp3');
    this.incorrectAnswers = 0;
    this.gameStarted = false;
    this.starContainer = undefined;
  }

  startGame() {
    this.starContainer = document.getElementById('star-container');
    [this.incorrectAnswers, this.wordsForGame] = [0, []];
    this.gameStarted = true;
    document.querySelectorAll('.page__item.word-card').forEach((word) => {
      this.wordsForGame.push(word.id.split('_').join('/'));
    });
    this.wordsForGame.sort(() => Math.random() - 0.5);
    this.speech = new Audio(`./assets/audio/${this.wordsForGame[0]}.mp3`);
    setTimeout(() => {
      this.speech.play();
    }, 1000);
  }

  replayWord() {
    this.speech.play();
  }

  checkAnswer(answer) {
    const currentWord = this.wordsForGame[0];
    const checkedAnswer = (answer === currentWord);
    if (checkedAnswer) {
      this.correctSound.play();
      document.querySelector(`li#${answer.split('/').join('_')}`).innerHTML += `
        <div class="lock__element"></div>
      `;
    } else {
      this.incorrectSound.play();
      this.incorrectAnswers += 1;
    }

    this.starContainer.innerHTML = `
      <img class="score__star" src="./assets/img/${checkedAnswer}-star.png"></img>
      ${this.starContainer.innerHTML}
    `;

    this.wordsForGame.shift();

    if (this.wordsForGame.length === 0) {
      this.endGame();
    } else {
      this.wordsForGame.sort(() => Math.random() - 0.5);
      this.speech = new Audio(`./assets/audio/${this.wordsForGame[0]}.mp3`);
      setTimeout(() => {
        this.speech.play();
      }, 1000);
    }

    return [checkedAnswer, currentWord];
  }

  endGame() {
    this.gameStarted = false;
    if (this.incorrectAnswers === 0) {
      this.winEndGameSound.play();
    } else {
      this.loseEndGameSound.play();
    }
    this.view.render(['gameEnd', ''], this.incorrectAnswers);
    setTimeout(() => {
      document.location.hash = '#categories/';
    }, 3000);
  }
}
