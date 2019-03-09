import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetRegionChildren from '../../components/GetRegionChildren';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetRegionChildren: (zpid) => dispatch(zillowActions.fetchGetRegionChildren(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetRegionChildren);