import { combineReducers } from 'redux';
import Account from './account';
import Trips from './trips';
import Support from './support';
import Alerts from './alerts';

export default combineReducers({
  Account,
  Trips,
  Support,
  Alerts
});
