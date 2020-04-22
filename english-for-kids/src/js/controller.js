import View from './view';
import $firstUpCase from './utils/firstUpCase';

export default class Controller {
  constructor(model) {
    this.model = model;
    this.view = new View(this, this.model.getCategories());
  }

  setPage(_page) {
    const data = this.model[`get${$firstUpCase(_page[0])}`](_page[1]);
    this.view.render(_page, data);
  }

  setStatistic(_category, _word, _item) {
    this.model.setStatistic(_category, _word, _item);
  }

  resetStatistics() {
    this.model.clearStatistics();
  }
}
