'use strict';

import 'regenerator-runtime/runtime';
import { API_URL, API_KEY, RESULT_PER_PAGE } from './config';
import { getJSON, AJAX } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsLength: '',
    resultPerPage: RESULT_PER_PAGE,
    currentPage: 1,
    currentPageResults: [],
  },
  bookmarks: [],
};

export const loadRecipe = async id => {
  try {
    let { recipe } = await getJSON(`${API_URL}${id}?key=${API_KEY}`);

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if (state.bookmarks.some(recipe => recipe.id === id)) {
      state.recipe.bookmarked = true;
    }
  } catch (error) {
    throw error;
  }
};

export const loadSearchResult = async query => {
  try {
    state.search.results = [];
    state.search.query = query;

    let { recipes } = await getJSON(
      `${API_URL}?search=${query}&key=${API_KEY}`
    );

    if (!recipes.length) {
      throw new Error();
    }

    recipes.map(recipe => {
      let data = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
      state.search.results.push(data);
    });

    state.search.resultsLength = state.search.results.length;
  } catch (error) {
    throw error;
  }
};

export const loadSearchPage = (page = state.search.currentPage) => {
  state.search.currentPage = page;

  state.search.currentPageResults = [];

  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;

  state.search.currentPageResults = [...state.search.results.slice(start, end)];
};

export const bookmarkRecipe = () => {
  state.recipe.bookmarked ? removeFromBookmarks() : addToBookmarks();
  localStoreBookmarks();
};

const addToBookmarks = () => {
  state.recipe.bookmarked = true;
  state.bookmarks.push(state.recipe);
};

const removeFromBookmarks = () => {
  const index = state.bookmarks.findIndex(
    bookmark => bookmark.id === state.recipe.id
  );

  state.bookmarks.splice(index, 1);

  state.recipe.bookmarked = false;
};

const localStoreBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const updateServings = newServings => {
  state.recipe.ingredients.map(ingredient => {
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

export const uploadRecipe = async newRecipe => {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(recipe => recipe[0].startsWith('ingredient') && recipe[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(ing => ing.trim());

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const uploadRecipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const {
      data: { recipe },
    } = await AJAX(`${API_URL}?key=${API_KEY}`, uploadRecipe);

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    throw error;
  }
};

const init = () => {
  const storage = localStorage.getItem('bookmarks');

  if (!storage) return;

  state.bookmarks = JSON.parse(storage);
};

init();
