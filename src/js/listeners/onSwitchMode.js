/* global document */

import $on from '../utils/setListener';

export default () => {
  const switcher = document.getElementById('app-mode-switcher');

  const changeAppMode = (event) => {
    if (event.target.checked === true) {
      document.querySelectorAll('.app__mode_train').forEach((element) => {
        element.classList.replace('app__mode_train', 'app__mode_play');
      });
    } else if (event.target.checked === false) {
      document.querySelectorAll('.app__mode_play').forEach((element) => {
        element.classList.replace('app__mode_play', 'app__mode_train');
      });
    }
  };

  (function onSwitchMode() {
    $on(switcher, 'change', changeAppMode);
  }());
};
