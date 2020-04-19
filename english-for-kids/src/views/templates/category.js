import '../../../assets/css/category.css';
import '../../../assets/css/categories.css';

function cards(_mode, _data, _category) {
  let result = '';
  _data.forEach((_item) => {
    const word = _item[0];
    const lowerWord = word.toLowerCase();
    result += `<li class="word-item__container" id="${word}">
                  <div class="word-item__background ${_mode} word front" id="${_category}/${word}">
                    <div class="category-item__content ${_mode}" id="${_category}/${word}">
                      <img class="category-item__image" src="./assets/data/categories/${_category}/${lowerWord}.jpg">
                      <div class="word-item" id="text_${_mode}">
                        <p class="word-item__text">${word}</p>
                        <span class="flip-button" id="${word}">↻</span>
                      </div>
                    </div>
                  </div>
                  <div class="word-item__background ${_mode} back">
                    <div class="category-item__content">
                      <img class="category-item__image" src="./assets/data/categories/${_category}/${lowerWord}.jpg">
                      <div class="word-item">
                        <p class="word-item__text">${_item[1].translate}</p>
                      </div>
                    </div>
                  </div>
              </li>`;
  });
  return result;
}

export default function category(_mode, _data, _category) {
  return `<div class="play-mode__container ${_mode}" id="play-mode__container">
            <div class="play-mode__play-replay-button start" id="play-replay-button">Start game</div>
            <span class="play-mode__score-container" id="score-container"></span>
          </div>
          <div class="categories__container">
            <ul class="categories__content">
              ${cards(_mode, _data, _category)}
            </ul>
          </div>`;
}
