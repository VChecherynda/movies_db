import { connect } from 'react-redux';
import Layout from '../Components/Layout/Layout';
import { fetchFilms } from '../Actions/films';

const mapStateToProps = state => ({
  films: state.films || []
});

const mapDispatchToProps = dispatch => ({
  fetchFilmData: () => dispatch(fetchFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
