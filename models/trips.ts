import { Delivery } from './delivery';

export interface Trips {
  uuid: string;
  date: string;
  from: string;
  to: string;
  status: TripStatus;
  delivery?: Delivery[];
}

// REDUCER
export interface TripState {
  loading: boolean;
  errorMsg: string;
  trips: Trips[];
}

export interface TripsAction {
  type: string;
  payload?: {
    trips: Trips[];
  };
}

export enum TripStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETED'
}
