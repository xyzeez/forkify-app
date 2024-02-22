'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';

import * as model from './model';
import recipeView from './views/recipeView';

const controlRecipe = async id => {
  try {
    const id = window.location.hash.replace('#', '');

    if (!id) return;

    recipeView.renderSpinner();

    const recipe = await model.loadRecipe(id);

    recipeView.renderRecipe(recipe);
  } catch (error) {
    console.log(error);
  }
};

['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, controlRecipe);
});
