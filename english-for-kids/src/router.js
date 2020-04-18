/* global document window */

import Controller from './controller';
import $setListener from './utils/setListener';
import $route from './utils/route';


export default {
  init() {
    const controller = new Controller();
    if (document.location.hash.match(/^#categories\/&|^#category\//) === null) {
      document.location.hash = '#categories/';
    }
    $setListener(window, 'load', $route(controller));
    $setListener(window, 'hashchange', $route(controller));
  },
};
