import { Trips, TripStatus } from '../../models';

export const TRIPS_IN_PROGRESS = 'TRIPS_IN_PROGRESS';
export const TRIPS_SUCCESS = 'TRIPS_SUCCESS';
export const TRIPS_FAILURE = 'TRIPS_FAILURE';

export const tripInProgress = () => ({ type: TRIPS_IN_PROGRESS });
export const tripSuccess = (trips: Trips[]) => ({
  type: TRIPS_SUCCESS,
  payload: { trips }
});
export const tripFailure = () => ({ type: TRIPS_FAILURE });

export const getTrips = () => {
  // API CALL GOES HERE
  return async (dispatch: Function) => {
    dispatch(tripInProgress());

    const trips = [
      {
        uuid: '1KL3-LKSD-SDFS',
        date: '22-10-2019 13:00',
        from: 'Nairobi CBD',
        status: TripStatus.IN_PROGRESS,
        to: 'Kawangware'
      },
      {
        uuid: 'DSGH-KDKSJ3-SDF',
        date: '22-10-2019 13:00',
        from: 'St. Austine Ndwaru',
        status: TripStatus.COMPLETE,
        to: 'Kikuyu Hospital'
      },
      {
        uuid: '1SHL-SJD-SKDFG',
        date: '22-10-2019 13:00',
        from: 'Nairobi CBD',
        status: TripStatus.COMPLETE,
        to: 'Nyayo Stadium, Kasarani'
      }
    ];

    dispatch(tripSuccess(trips));
  };
};

export const clearTrips = (uuid: string) => {
  return uuid;
};
