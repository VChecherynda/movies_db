import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer/filmsReducer';

const allReducersCombine = combineReducers({
  film: filmsReducer
});

export default allReducersCombine;