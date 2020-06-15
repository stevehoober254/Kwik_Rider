import { Alerts } from '../../models';

export const ALERTS_IN_PROGRESS = 'ALERTS_IN_PROGRESS';
export const ALERTS_SUCCESS = 'ALERTS_SUCCESS';
export const ALERTS_FAILURE = 'ALERTS_FAILURE';

export const alertInProgress = () => ({ type: ALERTS_IN_PROGRESS });
export const alertSuccess = (alerts: Alerts[]) => ({
  type: ALERTS_SUCCESS,
  payload: { alerts }
});
export const alertFailure = () => ({ type: ALERTS_FAILURE });

export const getAlerts = () => {
  return async (dispatch: Function) => {
    dispatch(alertInProgress());

    const alerts = [
      {
        uuid: '23421-SDF-23S',
        date: '1 sec ago',
        from: 'Nairobi CBD',
        to: 'Kawangware',
        customer: {
          uuid: 'POI-DOSLW-3SG',
          name: 'Peter W. Johnshon',
          phoneNumber: '9394 388 3028'
        },
        shop: {
          uuid: 'SDF-49SDF8SDF-3',
          name: 'John K. Doe',
          phoneNumber: '4948 388 2455'
        }
      },
      {
        uuid: '234234DF-2SDFSDF-',
        date: '10 Min ago',
        from: 'St. Austine Ndwaru',
        to: 'Kikuyu Hospital',
        customer: {
          uuid: 'POI-DOSLW-3SG',
          name: 'Peter W. Johnshon',
          phoneNumber: '9394 388 3028'
        },
        shop: {
          uuid: 'SDF-49SDF8SDF-3',
          name: 'John K. Doe',
          phoneNumber: '4948 388 2455'
        }
      },
      {
        uuid: '1SD0-SDFDF-SDF',
        date: '4 min ago',
        from: 'Nairobi CBD',
        to: 'Nyayo Stadium, Kasarani',
        customer: {
          uuid: 'POI-DOSLW-3SG',
          name: 'Peter W. Johnshon',
          phoneNumber: '9394 388 3028'
        },
        shop: {
          uuid: 'SDF-49SDF8SDF-3',
          name: 'John K. Doe',
          phoneNumber: '4948 388 2455'
        }
      }
    ];

    dispatch(alertSuccess(alerts));
  };
};

export const clearAlerts = (uuid?: string) => {
  return uuid;
};

export const acceptDelivery = (uuid?: string) => {
  return uuid;
};

export const rejectDelivery = (uuid?: string) => {
  return uuid;
};
