import icons from '../../img/icons.svg';
import View from './view';
import previewView from './previewView';

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

  _generateResultMarkup = results => {
    return `
    <div class="results__inner">
      <h2 class="heading results__heading">Searched Recipes:</h2>
      <ul class="results__list">
      ${previewView._generatePreview(results)} 
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
