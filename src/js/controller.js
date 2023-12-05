'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// if (module.hot) module.hot.accept();

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

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResult(query);

    resultsView.render(model.getSearchResultPage());
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError();
  }
};

const controlPagination = goToPage => {
  resultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = newServings => {
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
