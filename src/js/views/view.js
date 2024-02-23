import icons from '../../img/icons.svg';

export default class View {
  _parentElement;
  _contentElement = this._parentElement;
  _data;
  _feedbackMessage = 'We could not find that recipe. Please try another one!';

  clearInner = () => {
    this._contentElement.innerHTML = '';
  };

  renderSpinner = () => {
    const spinner = `
      <div class="spinner">
        <svg class="spinner__icon">
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this.clearInner();
    this._contentElement.insertAdjacentHTML('afterbegin', spinner);
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
    this._contentElement.insertAdjacentHTML('afterbegin', feedback);
  };
}
