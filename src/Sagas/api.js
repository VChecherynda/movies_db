import {call} from 'redux-saga/effects';
import axios from 'axios';

export function* getPopularMovies(url) {
  try {
    const requestConfig = {
      url: `https://${process.env.REACT_APP_API_HOST}/${process.env.REACT_APP_API_VERSION}/${url}?api_key=${process.env.REACT_APP_API_KEY}&page=1`,
    };

    return yield call(axios.request, requestConfig);

  } catch (e) {
    console.log(e.response.data.errors[0].title);

    return e;
  }
}

