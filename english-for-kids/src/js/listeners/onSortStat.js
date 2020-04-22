/* global document */

import $on from '../utils/setListener';
import $sortStatistic from '../utils/sortStatistic';

export default () => {
  const byArray = [];
  byArray.push(document.getElementById('sort-by-category'));
  byArray.push(document.getElementById('sort-by-word'));
  byArray.push(document.getElementById('sort-by-train'));
  byArray.push(document.getElementById('sort-by-correct'));
  byArray.push(document.getElementById('sort-by-incorrect'));
  byArray.push(document.getElementById('sort-by-percentage'));

  const sortBy = (_element, _selector) => {
    let asc = true;
    document.querySelectorAll('.header__property').forEach((element) => {
      if (element !== _element) {
        element.classList.remove('sort_asc');
        element.classList.remove('sort_desc');
      }
    });

    if (_element.classList.contains('sort_asc')) {
      _element.classList.replace('sort_asc', 'sort_desc');
      asc = false;
    } else if (_element.classList.contains('sort_desc')) {
      _element.classList.replace('sort_desc', 'sort_asc');
      asc = true;
    } else {
      _element.classList.add('sort_asc');
    }

    $sortStatistic('.statistic__row-container', _selector, asc);
  };

  (function onSortStat() {
    sortBy(byArray[0], 'category-sort');
    byArray.forEach((item) => {
      $on(item, 'click', sortBy.bind(null, item, `${item.id.split('-')[2]}-sort`));
    });
  }());
};
