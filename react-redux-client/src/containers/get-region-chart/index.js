import { connect } from 'react-redux'

import * as zillowActions from '../../actions/zillowActions';
import GetRegionChart from '../../components/GetRegionChart';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetRegionChart: (zpid) => dispatch(zillowActions.fetchGetRegionChart(zpid)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetRegionChart);