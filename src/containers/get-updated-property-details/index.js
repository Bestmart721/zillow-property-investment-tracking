import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetUpdatedPropertyDetails from '../../components/GetUpdatedPropertyDetails';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetUpdatedPropertyDetails: (zpid) => dispatch(zillowActions.fetchGetUpdatedPropertyDetails(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetUpdatedPropertyDetails);