import icons from '../../img/icons.svg';

export default class View {
  _parentElement;
  _data;
  _feedbackMessage = 'We could not find that recipe. Please try another one!';

  activateParent = () => {
    this._parentElement.classList.add('active');
    setTimeout(() => {
      this._parentElement.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  };

  clearInner = () => {
    this._parentElement.innerHTML = '';
  };

  renderSpinner = () => {
    this.activateParent();
    const spinner = `
      <div class="spinner">
        <svg class="spinner__icon">
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this.clearInner();
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
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
    this._parentElement.insertAdjacentHTML('afterbegin', feedback);
  };
}
