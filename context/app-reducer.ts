import * as types from './types';

export default (state: any, action: any) => {
  switch (action.type) {
    case types.SCREEN_CHANGE:
      return {
        ...state,
        screen: action.screen,
      };
    case types.ACTIVATE_POST_MODAL:
      return {
        ...state,
        updatesModalStatus: action.status,
      };
    default:
      return state;
  }
};
