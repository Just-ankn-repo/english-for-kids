import '../../css/menu.css';

function links(_category) {
  let result = '';
  _category.forEach((category) => {
    const firstUp = category.split('');
    firstUp[0] = category[0].toUpperCase();
    result += `
      <li class="menu__link">
        <a class="menu-link" href="#category/${category}">
          <img class="menu__item-image" src="./assets/img/${category}/${category}.jpg">
          ${firstUp.join('')}
        </a>
      </li>
    `;
  });
  return result;
}

export default function menu(_category) {
  return `
    <div class="menu__wrapper app__mode_train" id="menu-wrapper">
      <ul class="menu__links">
        <li class="menu__link">
          <a class="menu-link" href="#categories/" style="text-height:bold;color:white">Home</a>
        </li>
        <li class="menu__link">
          <a class="menu-link" href="#statistics/">Statistics</a>
        </li>
        ${links(_category)}
      </ul>
    </div>
  `;
}
