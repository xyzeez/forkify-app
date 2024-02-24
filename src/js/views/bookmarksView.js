import icons from '../../img/icons.svg';
import View from './view';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks');
  _btnParent = document.querySelector('.nav');
  _btnElement = document.querySelector('.nav__btn--bookmarks');
  _btnSVG = this._btnElement.querySelector('svg');
  _btnSpan = this._btnElement.querySelector('span');
  _btnIcon = this._btnElement.querySelector('use');
  _btnCloseElement = document.querySelector('.bookmarks__btn');
  _overlay = document.querySelector('.overlay');
  openState = false;

  clearInner = () => {
    this._parentElement.innerHTML = '';
    this._renderButton();
  };

  _renderButton = () => {
    const btn = `
    <button
        aria-labelledby="Close form"
        class="btn btn--alt bookmarks__btn"
    >
        <svg class="btn__icon">
        <use href="${icons}#icon-close"></use>
        </svg>
    </button>`;
    this._parentElement.insertAdjacentHTML('beforeend', btn);
  };

  renderSpinner = () => {
    const spinner = `
      <div class="spinner">
        <svg class="spinner__icon">
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this.clearInner();
    this._parentElement.insertAdjacentHTML('beforeend', spinner);
  };

  renderFeedback = (message = this._feedbackMessage) => {
    const feedback = `
      <div class="feedback error">
        <svg class="feedback__icon">
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
        <p class="feedback__text">
          ${message}
        </p>
      </div>`;
    this.clearInner();
    this._parentElement.insertAdjacentHTML('beforeend', feedback);
  };

  monitorBookmarks = () => {
    this._btnParent.addEventListener('mouseover', e => {
      if (
        e.target === this._btnElement ||
        e.target === this._btnSVG ||
        e.target === this._btnSpan
      ) {
        this._parentElement.classList.add('show');
      }
    });

    this._btnParent.addEventListener('mouseout', e => {
      if (
        e.target === this._btnElement ||
        e.target === this._btnSVG ||
        e.target === this._btnSpan ||
        e.target === this._btnIcon
      ) {
        this._parentElement.classList.remove('show');
      }
    });

    this._btnParent.addEventListener('click', e => {
      this._parentElement.style.zIndex = '1000';
      if (
        e.target === this._btnElement ||
        e.target === this._btnSVG ||
        e.target === this._btnSpan ||
        e.target === this._btnIcon
      ) {
        if (!this.openState) {
          this._parentElement.classList.add('active');
        }

        if (this.openState) {
          this._parentElement.classList.remove('active');
        }

        this.openState = !this.openState;
      }
    });

    [this._overlay, this._btnCloseElement].forEach(element => {
      element.addEventListener('click', () => {
        this._parentElement.style.zIndex = '100';
        this._parentElement.classList.remove('active');
        this._parentElement.classList.remove('show');
        this.openState = false;
      });
    });
  };
}

export default new BookmarksView();
