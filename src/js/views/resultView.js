import icons from '../../img/icons.svg';
import View from './view';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _contentElement = document.querySelector('.results__list');
  _formElement = document.querySelector('.search');
  _formInput = this._formElement['search'];
  _paginationElement;
  _data;
  _feedbackMessage = 'We could not find that recipe. Please try another one!';

  renderResults = results => {
    this.clearInner();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateResultMarkup(results)
    );
  };

  renderPagination = searchData => {
    this._paginationElement = this._parentElement.querySelector('.pagination');
    this._paginationElement.innerHTML = '';
    this._paginationElement.insertAdjacentHTML(
      'afterbegin',
      this._generatePaginationMarkup(searchData)
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

  _generatePaginationPrevBtn = page => {
    const btnValue = page - 1;
    return `
    <button
      aria-labelledby="previous page"
      data-goto="${btnValue}"
      class="btn btn--alt pagination__btn pagination__btn--prev"
    >
      <svg class="btn__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${btnValue}</span>
    </button>`;
  };

  _generatePaginationNextBtn = page => {
    const btnValue = page + 1;
    return `
    <button
      aria-labelledby="next page"
      data-goto="${btnValue}"
      class="btn btn--alt pagination__btn pagination__btn--next"
    >
      <span>Page ${btnValue}</span>
      <svg class="btn__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
  };

  _generatePaginationMarkup = searchData => {
    const pagesLength = Math.ceil(
      searchData.resultsLength / searchData.resultPerPage
    );
    const currentPage = searchData.currentPage;

    if (currentPage === 1 && pagesLength > 1) {
      return this._generatePaginationNextBtn(currentPage);
    }

    if ((currentPage === 1) & (pagesLength === 1)) {
      return '';
    }

    if (currentPage === pagesLength && pagesLength > 1) {
      return this._generatePaginationPrevBtn(currentPage);
    }

    if (currentPage < pagesLength) {
      return (
        this._generatePaginationPrevBtn(currentPage) +
        this._generatePaginationNextBtn(currentPage)
      );
    }
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

  addHandlerPagination = handler => {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.pagination__btn');

      if (!btn) return;

      const goToPage = +btn.getAttribute('data-goto');

      handler(goToPage);
    });
  };
}

export default new ResultView();
