import '../../../assets/css/menu.css';

function links(data) {
  let result = '';
  data.forEach((element) => {
    const firstUp = element.split('');
    firstUp[0] = element[0].toUpperCase();
    result += `<li class="menu__link">
                <a class="menu-link" href="#category/${element}">${firstUp.join('')}</a>
              </li>`;
  });
  return result;
}

export default function menu(_mode, _links) {
  return `<div class="menu__body ${_mode}" id="menu_body">
              <ul class="menu__links">
                <li class="menu__link">
                  <a class="menu-link" href="#categories/" style="text-height:bold;color:white">Home</a>
                </li>
                ${links(_links)}
              </ul>
            </div>`;
}
