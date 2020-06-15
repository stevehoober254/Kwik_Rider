import { ALERTS_FAILURE, ALERTS_IN_PROGRESS, ALERTS_SUCCESS } from '../actions';
import { AlertsAction, Alertstate } from '../../models';

const initialState: Alertstate = {
  loading: false,
  errorMsg: '',
  alerts: []
};

const AlertsReducer = (
  state = initialState,
  action: AlertsAction
): Alertstate => {
  switch (action.type) {
    case ALERTS_IN_PROGRESS: {
      return {
        ...state,
        loading: true
      };
    }
    case ALERTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        alerts: action.payload?.alerts || []
      };
    }
    case ALERTS_FAILURE: {
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

export default AlertsReducer;
