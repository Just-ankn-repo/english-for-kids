import $firstUpCase from '../utils/firstUpCase';

export default function statistics(_data) {
  let result = `
    <ul class="page__statistic">
      <li class="statistic__buttons">
        <a href="#difficultwords/">
          <div class="statistic__buttons__botton" id="different-word-button">Repeat difficult words</div>
        </a>
        <div class="statistic__buttons__botton" id="reset-button">Reset statistics</div>
      </li>
      <li class="statistic__header">
        <div class="header__property" id="sort-by-category">Category</div>
        <div class="header__property" id="sort-by-word">Word</div>
        <div class="header__property" id="sort-by-train">Train</div>
        <div class="header__property" id="sort-by-correct">Correct</div>
        <div class="header__property" id="sort-by-incorrect">Incorrect</div>
        <div class="header__property" id="sort-by-percentage">Percentage</div>
      </li>
  `;
  Object.getOwnPropertyNames(_data).forEach((category) => {
    Object.getOwnPropertyNames(_data[category]).forEach((word) => {
      const [trainClick, playTrue, playFalse] = [_data[category][word].trainClick, _data[category][word].playTrue, _data[category][word].playFalse];
      const percent = Math.floor(playTrue / ((playTrue + playFalse) / 100));
      result += `
        <li class="statistic__row-container">
          <div class="row-container__property" id="category-sort">${$firstUpCase(category)}</div>
          <div class="row-container__property" id="word-sort">${$firstUpCase(word)}</div>
          <div class="row-container__property" id="train-sort">${trainClick}</div>
          <div class="row-container__property" id="correct-sort">${playTrue}</div>
          <div class="row-container__property" id="incorrect-sort">${playFalse}</div>
          <div class="row-container__property" id="percentage-sort">${percent || 0}</div></li>
      `;
    });
  });
  result += '</ul>';
  return result;
}
