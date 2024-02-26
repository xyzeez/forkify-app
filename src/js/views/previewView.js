import icons from '../../img/icons.svg';
import View from './view';

class PreviewView extends View {
  _generatePreview = data => {
    const currentRecipeId = window.location.hash.replace('#', '');

    return data
      .map(item => {
        let { id, title, publisher, image } = item;
        return `
            <li class="text results__preview preview">
              <a 
              class="preview__link 
              ${id === currentRecipeId ? 'preview__link--active' : ''}" 
              href="#${id}"
              >
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
                  <p class="text preview__publisher">${publisher}</p>
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

  activatePreview = () => {
    const currentRecipeId = window.location.hash;

    const previews = [...document.querySelectorAll('.preview__link')];

    if (!previews.length) return;

    previews.map(preview => {
      preview.classList.remove('preview__link--active');

      let link = preview.getAttribute('href');

      if (link === currentRecipeId) {
        preview.classList.add('preview__link--active');
      }
    });
  };
}

export default new PreviewView();
