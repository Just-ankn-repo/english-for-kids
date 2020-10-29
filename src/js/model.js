/* global window */

import $data from '../data/data';

export default class Model {
  constructor() {
    this.data = $data;
    this.ls = window.localStorage;
    this.initLocalStorage();
  }

  getCategories() {
    return Object.getOwnPropertyNames(this.data);
  }

  getCategory(_category) {
    return Object.entries(this.data[`${_category}`]);
  }

  getDifficultwords() {
    const statistic = this.getStatistics();
    const diffWords = [];
    Object.getOwnPropertyNames(statistic).forEach((category) => {
      Object.getOwnPropertyNames(statistic[category]).forEach((word) => {
        const countAnswers = statistic[category][word].playTrue + statistic[category][word].playFalse;
        const percent = Math.floor(statistic[category][word].playTrue / (countAnswers / 100));
        if ((percent > 0 || statistic[category][word].playFalse > 0) && percent < 100) {
          diffWords.push([category, word, statistic[category][word].translate, percent]);
        }
      });
    });
    diffWords.sort((a, b) => a[3] - b[3]);
    diffWords.length = 8;
    return diffWords;
  }

  initLocalStorage() {
    if (!this.ls.getItem('statistics')) {
      const statistic = {};
      this.getCategories().forEach((category) => {
        statistic[category] = {};
        this.getCategory(category).forEach((word) => {
          statistic[category][word[0]] = {
            translate: word[1], trainClick: 0, playTrue: 0, playFalse: 0,
          };
        });
      });
      this.ls.setItem('statistics', JSON.stringify(statistic));
    }
  }

  getStatistics() {
    return JSON.parse(this.ls.getItem('statistics'));
  }

  setStatistic(category, word, item) {
    const stat = JSON.parse(this.ls.getItem('statistics'));
    stat[category][word][item] += 1;
    this.ls.setItem('statistics', JSON.stringify(stat));
  }

  clearStatistics() {
    this.ls.removeItem('statistics');
    this.initLocalStorage();
  }
}
