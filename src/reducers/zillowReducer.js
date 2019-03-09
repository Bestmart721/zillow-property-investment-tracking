const INITIAL_STATE = {
  get_zestimate: null,
  isFetching: false,
  error: null,
  successMsg: null
};

const zillowReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_GET_REGION_CHILDREN_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_REGION_CHILDREN_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_REGION_CHILDREN_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    case 'FETCH_GET_DEEP_COMPS_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_DEEP_COMPS_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_DEEP_COMPS_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    case 'FETCH_GET_COMPS_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_COMPS_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_COMPS_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    case 'FETCH_GET_CHART_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_CHART_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_CHART_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    case 'FETCH_GET_UPDATED_PROPERTY_DETAILS_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_UPDATED_PROPERTY_DETAILS_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_UPDATED_PROPERTY_DETAILS_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    case 'FETCH_GET_ZESTIMATE_REQUEST':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: true,
        error: null,
        successMsg: null
      }

    case 'FETCH_GET_ZESTIMATE_SUCCESS':
      return {
        ...currentState,
        get_zestimate: action.get_zestimate,
        isFetching: false,
        error: null,
        successMsg: action.message
      }

    case 'FETCH_GET_ZESTIMATE_FAILED':
      return {
        ...currentState,
        get_zestimate: null,
        isFetching: false,
        error: action.error,
        successMsg: null
      }

    default:
      return currentState
  }
};

export default zillowReducer;
