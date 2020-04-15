import '../../assets/css/header.css';
import menu from './menu';

export default function header(mode, data) {
  return `<header class="header ${mode}">
  ${menu(mode, data)}
  <div class="header__container">
    <div class="header__menu-button">&#9776;</div>
    <div class="header__mode-switcher">
      <input type="checkbox" class="mode-switcher__checkbox" id="mode_switcher" checked>
      <label class="mode-switcher__label" for="mode_switcher">
        <span class="mode-switcher__inner"></span>
        <span class="mode-switcher__switch"></span>
      </label>
    </div>
  </div>
</header>
  `;
}
