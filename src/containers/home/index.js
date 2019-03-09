import { connect } from 'react-redux';
import App from '../../components/App';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
