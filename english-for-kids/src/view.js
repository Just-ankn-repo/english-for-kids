/* global */

import '../assets/css/style.css';
import Header from './views/header';
import Menu from './views/menu';
import Categories from './views/categories';
import Category from './views/category';

export default class View {
  constructor(_mode, _links) {
    this.mode = _mode;
    this.links = _links;
    this.header = new Header(_mode);
    this.menu = new Menu(_mode, _links);
    this.categories = new Categories();
    this.category = new Category();
    this.currPage = [];
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.mode = _mode;
      this.header.setMode(this.mode);
      this.menu.setMode(this.mode);
      this[this.currPage[0]].setMode(this.mode);
    }
  }

  showMenu(_isShow) {
    this.menu.showMenu(_isShow);
  }

  render(_toRender, _data) {
    this.currPage = _toRender;
    this.header.render(this.mode, this.currPage);
    this[_toRender[0]].render(this.mode, _data || null, _toRender[1]);
  }

  gameAnswer(_word, _answer) {
    this.category.gameAnswer(_word, _answer);
  }

  playWord(_word) {
    this.category.playWord(_word);
  }

  renderEndGame(_answers) {
    this.category.renderEndGame(_answers);
  }
}
