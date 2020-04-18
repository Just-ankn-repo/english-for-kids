/* global */

import '../assets/css/style.css';
import Header from './views/header';
import Menu from './views/menu';
import Categories from './views/categories';
import Category from './views/category';
import Statistics from './views/statistics';

export default class View {
  constructor(_mode, _links) {
    this.mode = _mode;
    this.links = _links;
    this.header = new Header(_mode);
    this.menu = new Menu(_mode, _links);
    this.categories = new Categories();
    this.category = new Category();
    this.statistics = new Statistics();
    this.currPage = [];
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.header.setMode(this.mode);
      this.menu.setMode(this.mode, this.links);
      this.render(this.currPage);
    }
  }

  showMenu(_change) {
    this.menu.menuShow(_change);
  }

  render(_toRender, _data) {
    this.header.render(this.mode, this.currPage);
    this[_toRender[0]].render(this.mode, _data || null, _toRender[1]);
  }
}
