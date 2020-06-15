import {
  ACCOUNT_FAILURE,
  ACCOUNT_IN_PROGRESS,
  ACCOUNT_SUCCESS
} from '../actions';
import { AccountAction, AccountState } from '../../models';

const initialState: AccountState = {
  loading: false,
  errorMsg: ''
};

const AccountReducer = (
  state = initialState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case ACCOUNT_IN_PROGRESS: {
      return {
        ...state,
        loading: true
      };
    }
    case ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case ACCOUNT_FAILURE: {
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

export default AccountReducer;
