import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetDeepComps from '../../components/GetDeepComps';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetDeepComps: (zpid) => dispatch(zillowActions.fetchGetDeepComps(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetDeepComps);