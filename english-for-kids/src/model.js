import data from '../assets/data/data';

export default class Model {
  constructor() {
    this.data = data;
  }

  getCategories() {
    return Object.getOwnPropertyNames(this.data);
  }

  getCategory(_category) {
    return Object.entries(this.data[`${_category}`]);
  }
}
