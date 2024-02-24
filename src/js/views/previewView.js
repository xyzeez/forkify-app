import icons from '../../img/icons.svg';
import View from './view';

class PreviewView extends View {
  _generatePreview = data => {
    return data
      .map(item => {
        let { id, title, publisher, image } = item;
        return `
            <li class="text results__preview preview">
              <a class="preview__link" href="#${id}">
                <figure class="preview__fig">
                  <img
                    src="${image}"
                    alt="${title}"
                    class="preview__img"
                  />
                </figure>
                <div class="preview__data">
                  <h3 class="heading preview__title">
                    ${title}
                  </h3>
                  <p class="text preview__publisher">${publisher}g</p>
                  <div class="preview__user-generated visually-hidden">
                    <svg>
                      <use href="${icons}#icon-user"></use>
                    </svg>
                  </div>
                </div>
              </a>
            </li>`;
      })
      .join('');
  };
}

export default new PreviewView();
