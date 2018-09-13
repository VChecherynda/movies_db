import { call, put, takeEvery } from 'redux-saga/effects';
import { getPopularMovies } from './api';

import {
  FETCH_FILMS
} from '../Actions'

import {
  fetchFilmsSuccess
} from '../Actions/films'

function* fetchFilmsData(action) {
  try {
    const popularMovies = yield call(getPopularMovies, 'movie/popular');
    yield put(fetchFilmsSuccess(popularMovies.data))

  } catch (e) {
    console.log('Cant get popular movies' + e);
  }
}

export function* filmsWatcher() {
  yield takeEvery(FETCH_FILMS, fetchFilmsData)
}