/* global document window */

import Controller from './controller';
import $setListener from './utils/setListener';
import $route from './utils/route';
import $handler from './handler';


export default {
  init() {
    if (document.location.hash.match(/^#categories\/&|^#category\/|^#statistics\//) === null) {
      document.location.hash = '#categories/';
    }
    const controller = new Controller();
    $handler.controller = controller;
    $setListener(window, 'load', () => $route(controller));
    $setListener(window, 'hashchange', () => $route(controller));
  },
};
