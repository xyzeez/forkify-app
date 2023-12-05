import icons from '../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    const currPage = this._data.page;

    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupNextBtn(currPage);
    }

    if (currPage === 1 && numPages === 1) {
      return '';
    }

    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupPrevBtn(currPage);
    }

    if (currPage < numPages) {
      return (
        this._generateMarkupPrevBtn(currPage) +
        this._generateMarkupNextBtn(currPage)
      );
    }
  }

  _generateMarkupPrevBtn(page) {
    return `
    <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
    </button>`;
  }

  _generateMarkupNextBtn(page) {
    return `
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.getAttribute('data-goto');

      handler(goToPage);
    });
  }
}

export default new PaginationView();
