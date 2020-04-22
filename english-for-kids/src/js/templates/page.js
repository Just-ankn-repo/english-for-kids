import '../../css/page.css';
import $categoriesTpl from './categories';
import $categoryTpl from './category';
import $gameEndTpl from './gameEnd';
import $statisticsTpl from './statistics';
import $difficultWordsTpl from './difficultWords';

export default function main(_page, _data, _mode) {
  let pageTpl = '';
  if (_page[0] === 'categories') {
    pageTpl = $categoriesTpl(_data, _mode);
  } else if (_page[0] === 'category') {
    pageTpl = $categoryTpl(_data, _page[1], _mode);
  } else if (_page[0] === 'gameEnd') {
    pageTpl = $gameEndTpl(_data);
  } else if (_page[0] === 'statistics') {
    pageTpl = $statisticsTpl(_data);
  } else if (_page[0] === 'difficultwords') {
    pageTpl = $difficultWordsTpl(_data, _mode);
  } else {
    pageTpl = '404: Page not found';
  }
  return `
    <div class="page__container">
        ${pageTpl}
    </div>
  `;
}
