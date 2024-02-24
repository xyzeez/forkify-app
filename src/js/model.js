'use strict';

import 'regenerator-runtime/runtime';
import { API_URL, RESULT_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsLength: '',
    resultPerPage: RESULT_PER_PAGE,
    currentPage: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async id => {
  try {
    let { recipe } = await getJSON(`${API_URL}${id}`);

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

export const loadSearchResult = async query => {
  try {
    state.search.results = [];
    state.search.query = query;

    let { recipes } = await getJSON(`${API_URL}?search=${query}`);

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

  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;

  const results = state.search.results.slice(start, end);

  return results;
};
