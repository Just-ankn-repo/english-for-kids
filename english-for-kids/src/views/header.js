/* global document */
import $header from './templates/header';
import headerListeners from './listeners/headerListeners';


export default class Header {
  constructor(_mode) {
    this.mode = _mode;
    this.headerTemplate = $header;
    this.headerListeners = headerListeners;
    this.selfObj = {};
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
      this.mode = _mode;
      document.getElementById('header_wrapper').classList[1] = this.mode;
      document.getElementById('mode_switcher').checked = (this.mode !== 'train');
    }
  }

  async render(_mode, _currPage) {
    this.selfObj.innerHtml = await $header(_mode, _currPage);
    await this.headerListeners();
  }
}
