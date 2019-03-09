import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetDemographics from '../../components/GetDemographics';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetDemographics: (zpid) => dispatch(zillowActions.fetchGetDemographics(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetDemographics);