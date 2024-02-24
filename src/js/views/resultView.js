import icons from '../../img/icons.svg';
import View from './view';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _contentElement = document.querySelector('.results__list');
  _formElement = document.querySelector('.search');
  _formInput = this._formElement['search'];
  _data;
  _feedbackMessage = 'We could not find that recipe. Please try another one!';

  renderResults = results => {
    this.clearInner();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateResultMarkup(results)
    );
  };

  clearContent = () => {
    this._contentElement.innerHTML = '';
  };

  _generateListItems = list => {
    return list
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

  _generateResultMarkup = results => {
    return `
    <div class="results__inner">
      <h2 class="heading results__heading">Searched Recipes:</h2>
      <ul class="results__list">
      ${this._generateListItems(results)} 
      </ul>
      <div class="results__pagination pagination">
      </div>
    </div>`;
  };

  addHandlerSearch = handler => {
    this._formElement.addEventListener('submit', e => {
      e.preventDefault();

      const query = this._formInput.value;

      if (!query) return;

      handler(query);

      this._formInput.value = '';
    });
  };
}

export default new ResultView();
