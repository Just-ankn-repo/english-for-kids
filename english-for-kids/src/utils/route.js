/* global document */

export default function route(_controller) {
  const location = document.location.hash.slice(1);
  const [page, category] = location.split('/');
  _controller.setPage([page, category]);
}
