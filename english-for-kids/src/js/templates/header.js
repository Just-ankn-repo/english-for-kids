import '../../css/header.css';

export default function header() {
  return `
    <div class="header__wrapper app__mode_train" id="header-wrapper">
      <div class="header__container">
        <div class="header__menu-container">
          <div class="header__menu-button" id="menu-button">
            <span></span>
            <div class="header__menu-text">Menu</div>
          </div>
        </div>
        <div class="header__current-page" id="current-page"></div>
        <div class="header__mode-switcher-container">
          <div class="header__mode-switcher">
            <input type="checkbox" class="mode-switcher__checkbox" id="app-mode-switcher">
            <label class="mode-switcher__label" for="app-mode-switcher">
              <span class="mode-switcher__inner"></span>
              <span class="mode-switcher__switch"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}
