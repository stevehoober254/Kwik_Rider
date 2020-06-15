import { TRIPS_FAILURE, TRIPS_IN_PROGRESS, TRIPS_SUCCESS } from '../actions';
import { TripsAction, TripState } from '../../models';

const initialState: TripState = {
  loading: false,
  errorMsg: '',
  trips: []
};

const TripsReducer = (state = initialState, action: TripsAction): TripState => {
  switch (action.type) {
    case TRIPS_IN_PROGRESS: {
      return {
        ...state,
        loading: true
      };
    }
    case TRIPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        trips: action.payload?.trips || []
      };
    }
    case TRIPS_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default TripsReducer;
