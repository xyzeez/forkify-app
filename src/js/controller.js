'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';
if (module.hot) module.hot.accept();

import * as model from './model';
import recipeView from './views/recipeView';

const controlRecipe = async () => {
  try {
    const id = window.location.hash.replace('#', '');

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.renderRecipe(model.state.recipe);
  } catch (error) {
    recipeView.renderFeedback();
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipe);
};

init();
