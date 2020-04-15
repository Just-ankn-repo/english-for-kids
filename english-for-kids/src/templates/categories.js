import '../../assets/css/categories.css';

function cards(mode, data) {
  let result = '';
  data.forEach((element) => {
    const firstUp = element.split('');
    firstUp[0] = element[0].toUpperCase();
    result += `<li class="category-item">
                <a class="category-item__link" href="#/categories/${element}">
                  <div class="category-item__background ${mode}">
                    <div class="category-item__content">
                      <img class="category-item__image" src="./assets/data/categories/${element}/${element}.jpg">
                      <p class="category-item__text">${firstUp.join('')}</p>
                    </div>
                  </div>
                </a>
              </li>`;
  });
  return result;
}

export default function categories(mode, data) {
  return `<main class="main">
            <div class="categories__container">
              <ul class="categories__content">
                ${cards(mode, data)}
              </ul>
            </div>
          </main>`;
}
