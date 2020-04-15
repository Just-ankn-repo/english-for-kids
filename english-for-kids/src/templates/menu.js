import '../../assets/css/menu.css';

function links(data) {
  let result = '';
  data.forEach((element) => {
    const firstUp = element.split('');
    firstUp[0] = element[0].toUpperCase();
    result += `<li class="menu__link">
                <a class="menu-link" href="#/categories/${element}">${firstUp.join('')}</a>
              </li>`;
  });
  return result;
}

export default function menu(mode, data) {
  return `<nav class="nav__menu">
            <div class="menu__shadow">
              <div class="menu__body ${mode}">
                <ul class="menu__links">
                  <li class="menu__link">
                    <a class="menu-link" href="#">Home</a>
                  </li>
                  <li class="menu__link">
                    <a class="menu-link" href="#/statistics">Statistics</a>
                  </li>
                  ${links(data)}
                </ul>
              </div>
            </div>
            </nav>`;
}
