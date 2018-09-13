import {
  FETCH_FILMS_SUCCESS
} from '../Actions'

const initialState = {
  films: {},
}

export default function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return { ...state, films: action.payload }
    default:
      return state;
  }
}