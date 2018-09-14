import { connect } from 'react-redux';
import Cards from '../Components/Cards/Cards';

const mapStateToProps = state => ({
  films: state.films || []
});

export default connect(mapStateToProps)(Cards);
