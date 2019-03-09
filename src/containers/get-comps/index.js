import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetComps from '../../components/GetComps';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetComps: (zpid) => dispatch(zillowActions.fetchGetComps(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetComps);