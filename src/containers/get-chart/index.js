import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetChart from '../../components/GetChart';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetChart: (zpid) => dispatch(zillowActions.fetchGetChart(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetChart);