import { Account } from '../../models';

export const ACCOUNT_IN_PROGRESS = 'ACCOUNT_IN_PROGRESS';
export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
export const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE';

export const accountInProgress = () => ({ type: ACCOUNT_IN_PROGRESS });
export const accountSuccess = () => ({ type: ACCOUNT_SUCCESS });
export const accountFailure = () => ({ type: ACCOUNT_FAILURE });

export const register = (data: Pick<Account, 'phoneNumber' | 'password'>) => {
  return data;
};

export const login = (data: Pick<Account, 'phoneNumber' | 'password'>) => {
  return data;
};

export const passResetRequest = (phoneNumber: Pick<Account, 'phoneNumber'>) => {
  return phoneNumber;
};

export const updateAccountInfo = (data: Account, uuid: string) => {
  return { data, uuid };
};

export const updatePassword = (password: Pick<Account, 'password'>) => {
  return password;
};

export const deactivateAccount = (uuid: string) => {
  return uuid;
};
