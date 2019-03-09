import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetRateSummary from '../../components/GetRateSummary';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetRateSummary: (zpid) => dispatch(zillowActions.fetchGetRateSummary(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetRateSummary);