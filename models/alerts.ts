import { User } from './user';
import { Delivery } from './delivery';

export interface Alerts {
  uuid: string;
  customer: User;
  shop: User;
  from: string;
  to: string;
  date: string;
  delivery?: Delivery[];
}

// REDUCER
export interface Alertstate {
  loading: boolean;
  errorMsg: string;
  alerts: Alerts[];
}

export interface AlertsAction {
  type: string;
  payload?: {
    alerts: Alerts[];
  };
}

