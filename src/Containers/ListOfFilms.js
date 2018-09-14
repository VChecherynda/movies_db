import { connect } from 'react-redux';
import ListOfFilms from '../Views/ListOfFilms';
import { fetchFilms } from '../Actions/films';

const mapDispatchToProps = dispatch => ({
  fetchFilmData: () => dispatch(fetchFilms())
});

export default connect(null, mapDispatchToProps)(ListOfFilms);
