import { call, all } from 'redux-saga/effects';
import { addFilmsData } from './filmsSaga/addFilmsSaga';

export default function* rootSaga(getState) {
  yield all([
    call(addFilmsData),
  ])
}