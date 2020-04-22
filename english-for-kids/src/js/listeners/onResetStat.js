/* global document */

import $on from '../utils/setListener';

export default (controller) => {
  const resetButton = document.getElementById('reset-button');

  const resetStat = () => {
    controller.resetStatistics();
    controller.setPage(['statistics', '']);
  };

  (function onResetStat() {
    $on(resetButton, 'click', resetStat);
  }());
};
