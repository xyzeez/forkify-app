import fracty from 'fracty';
import icons from '../../img/icons.svg';
import View from './view';

class recipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _data;
  _feedbackMessage = 'We could not find that recipe. Please try another one!';

  renderRecipe = recipeData => {
    this.clearInner();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateRecipeMarkup(recipeData)
    );
  };

  updateRecipe = recipeData => {
    const newMarkup = this._generateRecipeMarkup(recipeData);
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = currElements[i];

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );

        if (newEl.firstChild?.nodeValue.trim() !== '') {
          curEl.textContent = newEl.textContent;
        }
      }
    });
  };

  _generateListItems = list => {
    return list
      .map(item => {
        let { quantity, unit, description } = item;
        return `
        <li class="text recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity 
          ${quantity ? `">${fracty(quantity)}` : `hidden">`}
          </div>
          <div class="recipe__description">
            <span class="recipe__unit">${unit}</span>
            ${description}
          </div>
        </li>`;
      })
      .join('');
  };

  _generateRecipeMarkup = recipe => {
    this._parentElement.classList.add('active');
    return `
    <article class="recipe__article">
      <figure class="recipe__fig">
        <img
          src="${recipe.image}"
          alt="${recipe.title}"
          class="recipe__img"
        />
        <h1 class="heading recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <h2 class="sr-only">Recipe Details</h2>
        <p class="text recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">
            ${recipe.cookingTime}
          </span>
          <span class="recipe__info-text">minutes</span>
        </p>
        <p class="text recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            recipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>
          <span class="recipe__info-buttons">
            <button
              class="btn btn--sec recipe__btn--update-servings"
              aria-labelledby="reduce servings"
              data-update-to="${recipe.servings - 1}"
            >
              <svg class="btn__icon">
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button
              class="btn btn--sec recipe__btn--update-servings"
              aria-labelledby="increase servings"
              data-update-to="${recipe.servings + 1}"
            >
              <svg class="btn__icon">
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </span>
        </p>
        <div class="recipe__user-generated visually-hidden">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button
          aria-labelledby="Bookmark recipe"
          class="btn btn--pry btn--bookmark recipe__btn"
        >
          <svg class="btn__icon">
            <use href="${icons}#icon-bookmark${
      recipe.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading recipe__heading">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._generateListItems(recipe.ingredients)}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading recipe__heading">How to cook it</h2>
        <p class="text recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            recipe.publisher
          }</span>. Please check
          out directions at their website.
        </p>
        <a
          class="btn btn--pry recipe__btn recipe__link"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="btn__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </article>`;
  };

  addHandlerRender = handler => {
    ['hashchange', 'load'].forEach(event => {
      window.addEventListener(event, handler);
    });
  };

  addHandlerAddBookmark = handler => {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--bookmark');

      if (!btn) return;

      handler();
    });
  };

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.recipe__btn--update-servings');

      if (!btn) return;

      const updateTo = +btn.getAttribute('data-update-to');

      if (updateTo <= 0) return;

      handler(updateTo);
    });
  }
}

export default new recipeView();
