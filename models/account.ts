export interface AccountState {
  loading: boolean;
  errorMsg: string;
}

export type AccountAction = {
  type: string;
  payload?: object;
};
