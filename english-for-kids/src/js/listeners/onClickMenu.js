/* global document */

import $on from '../utils/setListener';

export default () => {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('app-menu');

  const hideMenu = (event) => {
    if (!event.target.classList.contains('menu__links')) {
      menuButton.classList.remove('close');
      menu.classList.replace('show', 'hide');
      document.body.removeEventListener('click', hideMenu);
    }
  };

  const showMenu = () => {
    if (!menuButton.classList.contains('close')) {
      menuButton.classList.add('close');
      menu.classList.replace('hide', 'show');
      setTimeout(() => {
        $on(document.body, 'click', hideMenu);
      }, 100);
    } else {
      hideMenu();
    }
  };

  (function onClickMenu() {
    $on(menuButton, 'click', showMenu);
  }());
};
