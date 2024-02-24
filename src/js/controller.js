'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';
if (module.hot) module.hot.accept();

import * as model from './model';
import recipeView from './views/recipeView';
import resultView from './views/resultView';
import bookmarksView from './views/bookmarksView';

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

const controlSearchResult = async query => {
  try {
    resultView.renderSpinner();

    await model.loadSearchResult(query);

    resultView.renderResults(model.loadSearchPage());
    resultView.renderPagination(model.state.search);
    resultView.addHandlerPagination(controlPagination);
  } catch (error) {
    resultView.renderFeedback();
  }
};

const controlPagination = goToPage => {
  resultView.renderResults(model.loadSearchPage(goToPage));
  resultView.renderPagination(model.state.search);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipe);
  resultView.addHandlerSearch(controlSearchResult);
  bookmarksView.monitorBookmarks();
};

init();
