import data from '../assets/data/data';

export default class Model {
  constructor() {
    this.data = data;
  }

  getData(category) {
    return (!category) ? Object.getOwnPropertyNames(this.data) : this.data[`${category}`];
  }
}
