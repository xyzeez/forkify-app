'use strict';

import 'core-js/actual';
import 'regenerator-runtime/runtime';
if (module.hot) module.hot.accept();

import * as model from './model';
import recipeView from './views/recipeView';
import resultView from './views/resultView';
import bookmarksView from './views/bookmarksView';
import paginationView from './views/paginationView';
import previewView from './views/previewView';
import uploadRecipeView from './views/uploadRecipeView';

const controlRecipe = async () => {
  try {
    const id = window.location.hash.replace('#', '');

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.renderRecipe(model.state.recipe);

    previewView.activatePreview();
  } catch (error) {
    recipeView.renderFeedback();
  }
};

const controlSearchResult = async query => {
  try {
    resultView.renderSpinner();

    await model.loadSearchResult(query);

    model.loadSearchPage();

    resultView.renderResults(model.state.search.currentPageResults);
    paginationView.defineSearchData(model.state.search);
    paginationView.addHandlerPagination(controlPagination);
  } catch (error) {
    resultView.renderFeedback();
  }
};

const controlPagination = goToPage => {
  model.loadSearchPage(goToPage);
  resultView.renderResults(model.state.search.currentPageResults);
  paginationView.addHandlerPagination(controlPagination);
};

const controlAddBookmark = () => {
  model.bookmarkRecipe();
  recipeView.updateRecipe(model.state.recipe);
  bookmarksView.renderBookmarks(model.state.bookmarks);
};

const controlServings = newServings => {
  model.updateServings(newServings);
  recipeView.updateRecipe(model.state.recipe);
};

const controlUploadRecipe = async newRecipe => {
  try {
    uploadRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.renderRecipe(model.state.recipe);
    uploadRecipeView.renderMessage();
    bookmarksView.renderBookmarks(model.state.bookmarks);
    window.history.pushState(null, '', `${model.state.recipe.id}`);
  } catch (error) {
    uploadRecipeView.renderFeedback(error.message);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipe);
  resultView.addHandlerSearch(controlSearchResult);
  bookmarksView.monitorBookmarks();
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  bookmarksView.renderBookmarks(model.state.bookmarks);
  recipeView.addHandlerUpdateServings(controlServings);
  uploadRecipeView.monitorUpload();
  uploadRecipeView.addHandlerUploadRecipe(controlUploadRecipe);
};

init();
