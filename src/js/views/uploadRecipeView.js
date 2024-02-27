import icons from '../../img/icons.svg';
import View from './view';

class UploadRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _parentContainerElement = document.querySelector('.modal-window');
  _btnParent = document.querySelector('.nav');
  _btnElement = document.querySelector('.nav__btn--upload-recipe');
  _btnSVG = this._btnElement.querySelector('svg');
  _btnSpan = this._btnElement.querySelector('span');
  _btnIcon = this._btnElement.querySelector('use');
  _btnCloseElement = document.querySelector('.modal-window__btn');
  _overlay = document.querySelector('.overlay');
  openState = false;
  _recipeFormColumn = document.querySelector('.upload__column--recipe');
  _ingredientsFormColumn = document.querySelector(
    '.upload__column--ingredients'
  );
  _btnNext = document.querySelector('.upload__btn--next');
  _btnPrev = document.querySelector('.upload__btn--prev');
  _btnAdd = document.querySelector('.upload__btn--add');
  _btnSubmit = document.querySelector('.upload__btn--submit');
  _feedbackMessage = 'Recipe was successfully uploaded';
  _recipeFormColumnValidated = false;
  _ingredientsFormColumnValidated = false;
  _formDataValid = false;

  monitorUpload = () => {
    this._btnParent.addEventListener('click', e => {
      if (
        e.target === this._btnElement ||
        e.target === this._btnSVG ||
        e.target === this._btnSpan ||
        e.target === this._btnIcon
      ) {
        this._parentContainerElement.classList.add('show');
      }
    });

    [this._overlay, this._btnCloseElement].forEach(element => {
      element.addEventListener('click', () => {
        this._parentContainerElement.classList.remove('show');
        this.clearUploadInputs();
      });
    });
  };

  isValid = (input, regex) => {
    const value = input.value;
    const condition = regex.test(value);
    input.setAttribute('aria-invalid', !condition);
    return condition;
  };

  validateTextFields = validationsArray => {
    const regex = /^.{4,}$/;
    const titleField = this._recipeFormColumn.querySelector(
      'input[name="title"]'
    );
    const publisherField = this._recipeFormColumn.querySelector(
      'input[name="publisher"]'
    );

    validationsArray.push(
      ...[this.isValid(titleField, regex), this.isValid(publisherField, regex)]
    );
  };

  validateNumberFields = validationsArray => {
    const regex = /^[1-9]\d*$/;
    const cookingTimeField = this._recipeFormColumn.querySelector(
      'input[name="cookingTime"]'
    );
    const servingsField = this._recipeFormColumn.querySelector(
      'input[name="servings"]'
    );

    validationsArray.push(
      ...[
        this.isValid(cookingTimeField, regex),
        this.isValid(servingsField, regex),
      ]
    );
  };

  validateURLFields = validationsArray => {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[\w-]+)*\/?$/;

    const sourceUrlField = this._recipeFormColumn.querySelector(
      'input[name="sourceUrl"]'
    );
    const imageUrlField = this._recipeFormColumn.querySelector(
      'input[name="image"]'
    );

    validationsArray.push(
      ...[
        this.isValid(sourceUrlField, regex),
        this.isValid(imageUrlField, regex),
      ]
    );
  };

  showUploadColumn = column => {
    [this._recipeFormColumn, this._ingredientsFormColumn].forEach(column => {
      column.classList.remove('show');
    });
    column.classList.add('show');
  };

  _validateRecipeColumn = () => {
    const validations = [];

    this.validateTextFields(validations);
    this.validateNumberFields(validations);
    this.validateURLFields(validations);

    if (!validations.includes(false)) {
      this.showUploadColumn(this._ingredientsFormColumn);
      this._btnSubmit.classList.add('show');
    }

    this._recipeFormColumnValidated = true;
  };

  _renderIngredientsMarkup = number => {
    return `
    <div class="upload__input-container">
      <label for="publisher" class="upload__label"
        >Ingredient ${number}:
      </label>
      <input
        type="text"
        name="ingredient-${number}"
        aria-errormessage="publisherErrorMessage"
        placeholder="Quantity, Unit, Description"
        class="upload__input"
      />
      <p
        id="publisherErrorMessage"
        aria-live="polite"
        class="upload__error-message"
      >
        Please enter a in the required format
      </p>
    </div>`;
  };

  _renderIngredientsFields = () => {
    const numOfFields = +this._ingredientsFormColumn.getAttribute(
      'data-ingredients-number'
    );
    const container =
      this._ingredientsFormColumn.querySelector('.upload__inner');

    container.innerHTML = '';

    let count = 1;

    while (count <= numOfFields) {
      container.insertAdjacentHTML(
        'beforeend',
        this._renderIngredientsMarkup(count)
      );
      count++;
    }
  };

  trimInput = input => {
    const trimmed = input
      .split(',')
      .map(item => item.trim())
      .join(',');

    return trimmed;
  };

  _filledFields = fields => {
    let filledField = [];

    fields.map(field => {
      if (field.value.trim() !== '') filledField.push(field);
    });

    if (filledField.length <= 0) return false;

    return filledField;
  };

  _validateIngredients = (fields, validationsArray) => {
    const regex = /^\d+,(?:[^,]*,)?[^,]+$/;

    fields.map(field => {
      validationsArray.push(this.isValid(field, regex));
    });
  };

  _validateIngredientsColumn = () => {
    const ingredientsFields = [
      ...this._ingredientsFormColumn.querySelectorAll('.upload__input'),
    ];

    let validfields = this._filledFields(ingredientsFields);

    if (validfields) {
      validfields.map(field => {
        field.value = this.trimInput(field.value);
      });

      const validations = [];

      this._validateIngredients(validfields, validations);

      if (!validations.includes(false)) {
        this._formDataValid = true;
      }
    } else {
      this._formDataValid = false;
      ingredientsFields.map(field => {
        this.isValid(field, /.+/);
      });
    }

    this._ingredientsFormColumnValidated = true;
  };

  resetInputState = column => {
    const inputs = [...column.querySelectorAll('input')];

    column.addEventListener('input', () => {
      inputs.forEach(input => {
        input.setAttribute('aria-invalid', false);
      });
    });
  };

  clearUploadInputs = () => {
    [...this._parentElement.querySelectorAll('input')].map(
      input => (input.value = '')
    );
  };

  addHandlerUploadRecipe = handler => {
    this._renderIngredientsFields();

    this._btnAdd.addEventListener('click', e => {
      e.preventDefault();

      let numOfFields = +this._ingredientsFormColumn.getAttribute(
        'data-ingredients-number'
      );

      numOfFields++;

      this._ingredientsFormColumn.setAttribute(
        'data-ingredients-number',
        numOfFields
      );

      this._renderIngredientsFields();
    });

    this._btnNext.addEventListener('click', e => {
      e.preventDefault();

      this._validateRecipeColumn();

      if (this._recipeFormColumnValidated)
        this.resetInputState(this._recipeFormColumn);
    });

    this._btnPrev.addEventListener('click', e => {
      e.preventDefault();

      this.showUploadColumn(this._recipeFormColumn);
      this._btnSubmit.classList.remove('show');
    });

    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();

      this._validateIngredientsColumn();

      if (this._ingredientsFormColumnValidated)
        this.resetInputState(this._ingredientsFormColumn);

      if (this._formDataValid) {
        const formData = Object.fromEntries([
          ...new FormData(this._parentElement),
        ]);

        for (let prop in formData) {
          if (formData[prop] === '') delete formData[prop];
        }

        handler(formData);

        this.clearUploadInputs();
      }
    });
  };
}

export default new UploadRecipeView();
