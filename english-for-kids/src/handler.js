export default {
  controller: {},

  sendEvent(_event, _parameters) {
    this.controller[`${_event}`](_parameters);
  },

};
