import $firstUpCase from '../utils/firstUpCase';

export default function categories(_categories, _mode) {
  let result = '<ul class="page__content" id="page-content">';
  _categories.forEach((category) => {
    const categoryUp = $firstUpCase(category);
    result += `
      <li class="page__item">
        <a class="page__item__link" href="#category/${category}">
          <div class="page__item__background ${_mode}">
            <div class="page__item__content">
              <img class="page__item-image" src="./assets/img/${category}/${category}.jpg">
              <p class="page__item-text">${categoryUp}</p>
            </div>
          </div>
        </a>
      </li>
    `;
  });
  result += '</ul>';
  return result;
}
