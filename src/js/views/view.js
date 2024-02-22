import icons from '../../img/icons.svg';

export default class View {
  _parentElement;
  _contentElement = this._parentElement;
  _data;
  _errorMessage;

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
}
