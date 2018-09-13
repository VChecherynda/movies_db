import { call, all } from 'redux-saga/effects';
import { filmsWatcher } from './filmsSaga';

export default function* rootSaga() {
  yield all([
    call(filmsWatcher),
  ])
}