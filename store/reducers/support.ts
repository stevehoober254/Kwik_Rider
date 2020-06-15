import {
  SUPPORT_FAILURE,
  SUPPORT_IN_PROGRESS,
  SUPPORT_SUCCESS
} from '../actions';
import { SupportAction, SupportState } from '../../models';

const initialState: SupportState = {
  loading: false,
  errorMsg: '',
  faqs: []
};

const TripsReducer = (
  state = initialState,
  action: SupportAction
): SupportState => {
  switch (action.type) {
    case SUPPORT_IN_PROGRESS: {
      return {
        ...state,
        loading: true
      };
    }
    case SUPPORT_SUCCESS: {
      return {
        ...state,
        loading: false,
        faqs: action.payload?.faqs || []
      };
    }
    case SUPPORT_FAILURE: {
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
