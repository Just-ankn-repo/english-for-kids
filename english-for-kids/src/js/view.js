/* global document */

import '../css/style.css';
import Game from './game';
import $firstUpCase from './utils/firstUpCase';
import $tpl from './templates/index';
import $on from './listeners/index';

export default class View {
  constructor(_controller, _categories) {
    this.controller = _controller;
    this.categories = _categories;
    this.game = new Game(this);
    this.tpl = $tpl;
    this.on = $on;
    this.headerElem = document.getElementById('app-header');
    this.menuElem = document.getElementById('app-menu');
    this.pageElem = document.getElementById('app-page');
    this.appMode = '';
    this.init();
  }

  init() {
    this.headerElem.innerHTML = this.tpl.$headerTpl();
    this.menuElem.innerHTML = this.tpl.$menuTpl(this.categories);
    this.on.$switchMode();
    this.on.$clickMenu();
  }

  render(_page, _data) {
    this.appMode = document.getElementById('header-wrapper').classList.item(1);
    document.getElementById('current-page').innerText = (_page[1] !== '') ? $firstUpCase(_page[1]) : $firstUpCase(_page[0]);
    this.pageElem.innerHTML = this.tpl.$pageTpl(_page, _data, this.appMode);
    if (['category', 'difficultwords'].includes(_page[0])) {
      this.on.$flipButton();
      this.on.$cardClick(this.controller, this.game);
      this.on.$gameButton(this.game);
    }
    if (_page[0] === 'statistics') {
      this.on.$resetStat(this.controller);
      this.on.$sortStat();
    }
  }
}
