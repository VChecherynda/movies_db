import {
  FETCH_FILMS_SUCCESS
} from '../Actions'

const initialState = {
  favourite: {},
}

export default function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS:
      return { ...state, favourite: action.payload }
    default:
      return state;
  }
}