import { connect } from 'react-redux';

import Property from '../../components/Property';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    mappedZillowState: state.zillowState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // mappedfetchPropertyById: propertyId => dispatch(propertyActions.fetchPropertyById(propertyId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Property);
