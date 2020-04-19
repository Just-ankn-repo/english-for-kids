/* global document */
import $header from './templates/header';
import $headerListeners from './listeners/headerListeners';


export default class Header {
  constructor(_mode) {
    this.mode = _mode;
    this.headerTemplate = $header;
    this.headerListeners = $headerListeners;
    this.selfObj = {};
    this.headerWrapper = {};
    this.modeSwitcher = {};
    this.menuButton = {};
    this.init();
  }

  init() {
    this.selfObj = document.createElement('header');
    this.selfObj.id = 'header';
    document.body.prepend(this.selfObj);
    this.render(this.mode);
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.headerWrapper.classList.replace(this.mode, _mode);
      this.mode = _mode;
      this.modeSwitcher.checked = (this.mode !== 'train');
    }
  }

  render(_mode, _currPage) {
    this.selfObj.innerHTML = $header(_mode, _currPage);

    this.headerWrapper = document.getElementById('header_wrapper');
    this.modeSwitcher = document.getElementById('mode_switcher');
    this.menuButton = document.getElementById('menu__btn');

    this.headerListeners.onModeSwitch(this.modeSwitcher);
    this.headerListeners.onMenuButton(this.menuButton);
  }
}
