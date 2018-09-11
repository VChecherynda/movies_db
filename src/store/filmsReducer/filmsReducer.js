const initialState = {
  films: {},
}

export default function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, films: action.payload }

    default:
      return state;
  }
}