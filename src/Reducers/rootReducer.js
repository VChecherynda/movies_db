import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';

const allReducersCombine = combineReducers({
  films: filmsReducer
});

export default allReducersCombine;