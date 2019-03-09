import { connect } from 'react-redux'

import * as zillowActions from '../../actions/zillowActions';
import GetZestimate from '../../components/GetZestimate';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetZestimate: (zpid) => dispatch(zillowActions.fetchGetZestimate(zpid)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetZestimate);