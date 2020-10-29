/* global document */

export default function sortDom(_sellector, _sortBy, _asc) {
  const domElements = document.querySelectorAll(_sellector);
  const parent = domElements.item(1).parentNode;
  const array = Array.from(domElements);
  array.sort((a, b) => {
    let first;
    let second;

    a.childNodes.forEach((c) => {
      if (c.id === _sortBy) {
        first = c.textContent;
      }
    });

    b.childNodes.forEach((c) => {
      if (c.id === _sortBy) {
        second = c.textContent;
      }
    });
    first = (/^\d+$/.test(first)) ? parseInt(first, 10) : first;
    second = (/^\d+$/.test(second)) ? parseInt(second, 10) : second;
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  });

  if (_asc === false) array.reverse();

  domElements.forEach((element) => { element.remove(); });
  array.forEach((element) => { parent.append(element); });
}
