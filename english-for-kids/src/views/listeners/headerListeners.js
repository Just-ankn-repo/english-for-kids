/* global document */

import $on from '../../utils/setListener';
import $event from '../../handler';

export default {
  onModeSwitch(_modeSwitcher) {
    $on(_modeSwitcher, 'change', () => $event.sendEvent('changeAppMode'));
  },

  onMenuButton(_menuButton) {
    $on(_menuButton, 'change', (event) => {
      if (event.target.checked === true) {
        $event.sendEvent('showMenu', 'show');
        $on(document.body, 'click', function hideMenu() {
          $event.sendEvent('showMenu', 'hide');
          document.body.removeEventListener('click', hideMenu);
          document.getElementById('menu__toggle').checked = false;
        });
      }
    });
  },
};
