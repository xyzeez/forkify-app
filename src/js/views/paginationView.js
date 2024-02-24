import icons from '../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parentElement;
  _data;

  defineSearchData = searchData => {
    this._data = searchData;
  };

  renderPagination = () => {
    this._parentElement = document.querySelector('.pagination');
    this.clearInner();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generatePaginationMarkup()
    );
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

  _generatePaginationMarkup = () => {
    const pagesLength = Math.ceil(
      this._data.resultsLength / this._data.resultPerPage
    );
    const currentPage = this._data.currentPage;

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

  addHandlerPagination = handler => {
    this.renderPagination();

    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.pagination__btn');

      if (!btn) return;

      const goToPage = +btn.getAttribute('data-goto');

      handler(goToPage);
    });
  };
}

export default new PaginationView();
