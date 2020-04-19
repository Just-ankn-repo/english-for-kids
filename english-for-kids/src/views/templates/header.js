import '../../../assets/css/header.css';

export default function header(_mode, _currPage = ['', '']) {
  const checked = (_mode === 'play') ? 'checked' : '';
  return `<div class="header__wrapper ${_mode}" id="header_wrapper">
            <div class="header__container">
              <div class="header__menu-button" id="menu_button">
                <div class="menu__btn" id="menu__btn">
                  <span></span>
                </div>
              </div>
              <div class="header__current-page">${_currPage[0]} / ${_currPage[1]}</div>
              <div class="header__mode-switcher">
                <input type="checkbox" class="mode-switcher__checkbox" id="mode_switcher" ${checked}>
                <label class="mode-switcher__label" for="mode_switcher">
                  <span class="mode-switcher__inner"></span>
                  <span class="mode-switcher__switch"></span>
                </label>
              </div>
            </div>
          </div>`;
}
