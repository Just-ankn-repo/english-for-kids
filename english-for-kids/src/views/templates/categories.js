import '../../../assets/css/categories.css';

const cards = (_mode, _categories) => {
  let result = '';
  _categories.forEach((_category) => {
    const firstUp = _category.split('');
    firstUp[0] = _category[0].toUpperCase();
    result += `<li class="category-item">
                <a class="category-item__link" href="#category/${_category}">
                  <div class="category-item__background ${_mode}">
                    <div class="category-item__content">
                      <img class="category-item__image" src="./assets/data/categories/${_category}/${_category}.jpg">
                      <p class="category-item__text">${firstUp.join('')}</p>
                    </div>
                  </div>
                </a>
              </li>`;
  });
  return result;
};

export default (_mode, _categories) => `<div class="categories__container">
                                    <ul class="categories__content">
                                      ${cards(_mode, _categories)}
                                    </ul>
                                  </div>`;
