'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './view/recipeView.js';
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
};

init();
