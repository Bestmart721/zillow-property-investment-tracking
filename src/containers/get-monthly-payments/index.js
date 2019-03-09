import { connect } from 'react-redux';

import * as zillowActions from '../../actions/zillowActions';
import GetMonthlyPayments from '../../components/GetMonthlyPayments';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    mappedZillowState: state.zillowState
  }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGetMonthlyPayments: (zpid) => dispatch(zillowActions.fetchGetMonthlyPayments(zpid)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GetMonthlyPayments);