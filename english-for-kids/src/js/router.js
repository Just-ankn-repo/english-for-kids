/* global document window */

import $on from './utils/setListener';

export default {
  init(controller) {
    if (document.location.hash.match(/^#categories\/&|^#category\/|^#statistics\//) === null) {
      document.location.hash = '#categories/';
    }

    const route = (_controller) => {
      const location = document.location.hash.slice(1);
      const [page, category] = location.split('/');
      _controller.setPage([page, category]);
    };

    $on(window, 'load', () => route(controller));
    $on(window, 'hashchange', () => route(controller));
  },
};
