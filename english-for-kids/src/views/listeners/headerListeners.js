/* global document */

import $on from '../../utils/setListener';
import $event from '../../handler';

export default {
  onModeSwitch(_modeSwitcher) {
    $on(_modeSwitcher, 'change', () => $event.sendEvent('changeAppMode'));
  },

  onMenuButton(_menuButton) {
    $on(_menuButton, 'click', () => {
      const button = document.getElementById('menu__btn');
      if (!button.classList.contains('close')) {
        button.classList.add('close');
        $event.sendEvent('showMenu', 'show');
        setTimeout(() => {
          $on(document.body, 'click', function hideMenu() {
            if (document.getElementById('menu__btn').classList.contains('close')) {
              $event.sendEvent('showMenu', 'hide');
              document.getElementById('menu__btn').classList.remove('close');
              document.body.removeEventListener('click', hideMenu);
            }
          });
        }, 100);
      }
    });
  },
};
