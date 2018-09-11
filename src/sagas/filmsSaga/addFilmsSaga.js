import { call, put, takeEvery } from 'redux-saga/effects';

function* addFilmsData(action) {
  try {
    // yield put({type: "ADD_INITIAL_CARD_SUCCESS", payload: weather});
  } catch (e) {
    // yield put({type: "ADD_INITIAL_CARD_FAILED", message: e.message});
  }
}

export function* addFilmsData() {
  yield takeEvery('ADD_FILMS', addFilmsData)
}