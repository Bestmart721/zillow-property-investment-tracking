import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetDeepSearchResults from '../../components/GetDeepSearchResults';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetDeepSearchResults: (zpid) => dispatch(zillowActions.fetchGetDeepSearchResults(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetDeepSearchResults);