/* global document */
import $categories from './templates/categories';

export default class Categories {
  constructor() {
    this.mode = 'train';
    this.categoriesTemplate = $categories;
    this.selfObj = undefined;
    this.cardsBackground = undefined;
    this.categories = [];
  }

  setMode(_mode) {
    if (this.mode !== _mode) {
      this.cardsBackground.forEach((card) => {
        card.classList.replace(this.mode, _mode);
      });
      this.mode = _mode;
    }
  }

  render(_mode, _categories) {
    this.categories = _categories || this.categories;
    const mainObj = document.getElementById('main');
    if (this.selfObj !== mainObj) {
      if (mainObj !== null) mainObj.remove();
      this.selfObj = document.createElement('main');
      this.selfObj.id = 'main';
      document.getElementById('nav').after(this.selfObj);
    }
    this.selfObj.innerHTML = this.categoriesTemplate(_mode, this.categories);
    this.cardsBackground = document.querySelectorAll('.category-item__background');
  }
}