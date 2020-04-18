/**
 * @param {HTMLElement} target
 * @param {string} eventType
 * @param {function} handler
 */
export default (target, eventType, handler) => target.addEventListener(eventType, handler);
