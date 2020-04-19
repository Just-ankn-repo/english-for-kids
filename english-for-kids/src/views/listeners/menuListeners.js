import $on from '../../utils/setListener';
import $event from '../../handler';

export default {
  onShow() {
    $on(document.body, 'change', $event.sendEvent('showMenu'));
  },
  onHide() {
    document.body.removeEventListener('change', () => $event.sendEvent('showMenu'), true);
  },

};
