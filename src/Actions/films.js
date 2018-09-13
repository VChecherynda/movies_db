import {
  FETCH_FILMS,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
 } from './index.js';

export const fetchFilms = () => {
  return {
    type: FETCH_FILMS
  }
};

export const fetchFilmsSuccess = (state) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    payload: state,
    isLoading: true
  }
};

export const fetchFilmsError = (state) => {
  return {
    type: FETCH_FILMS_ERROR,
    payload: state,
    isLoading: false
  }
};