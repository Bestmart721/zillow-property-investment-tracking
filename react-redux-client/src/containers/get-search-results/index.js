import { connect } from 'react-redux'

import * as zillowActions from '../../actions/zillowActions';
import GetSearchResults from '../../components/GetSearchResults';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetSearchResults: (zpid) => dispatch(zillowActions.fetchGetSearchResults(zpid)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetSearchResults);