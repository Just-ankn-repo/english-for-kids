/* global document */

import $menu from './templates/menu';
import $menuListeners from './listeners/menuListeners';

export default class Menu {
  constructor(_mode, _links) {
    this.mode = _mode;
    this.links = _links;
    this.menuTemplate = $menu;
    this.menuListeners = $menuListeners;
    this.selfObj = {};
    this.show = 'hide';
    this.menuBody = {};
    this.init();
  }

  init() {
    this.selfObj = document.createElement('nav');
    this.selfObj.id = 'nav';
    this.selfObj.classList = 'hide';
    document.getElementById('header').after(this.selfObj);
    this.render(this.mode, this.links);
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.menuBody.classList.replace(this.mode, _mode);
      this.mode = _mode;
    }
  }

  showMenu(_isShow) {
    if (this.show !== _isShow) {
      this.selfObj.classList.replace(this.show, _isShow);
      this.show = _isShow;
    }
  }

  render(_mode, _links) {
    this.selfObj.innerHTML = $menu(_mode, _links);
    this.menuBody = document.getElementById('menu_body');
  }
}
