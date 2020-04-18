/* global document */
import $menu from './templates/menu';


export default class Menu {
  constructor(_mode, _links) {
    this.mode = _mode;
    this.links = _links;
    this.menuTemplate = $menu;
    this.selfObj = {};
    this.init();
  }

  init() {
    this.selfObj = document.createElement('nav');
    this.selfObj.id = 'nav';
    document.getElementById('header').after(this.selfObj);
    this.render(this.mode, this.links);
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.mode = _mode;
      document.getElementById('menu_wrapper').classList[1] = this.mode;
    }
  }

  menuShow(_show) {
    if (_show === true) {
      this.selfObj.classList[1] = 'show';
    } else {
      this.selfObj.classList[1] = 'hide';
    }
  }

  render(_mode, _links) {
    this.selfObj.innerHtml = $menu(_mode, _links);
  }
}
