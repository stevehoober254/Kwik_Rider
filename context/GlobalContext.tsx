import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import AppReducer from './app-reducer';
import { initialState } from './initial-state';
import Screen from '../models/enums/account';
import * as types from './types';
import NetInfo from '@react-native-community/netinfo';

type Props = {
  children: React.ReactNode;
};

const GlobalContext = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const detectInternet = () => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(_ => {
      // console.log('Connection type', st.type);
      // console.log('Is connected?', st.isConnected);
    });

    // Unsubscribe
    unsubscribe();
  };

  const switchScreens = (screen: string) => {
    switch (screen) {
      case Screen.login:
        dispatch({ type: types.SCREEN_CHANGE, screen: Screen.login });
        break;
      case Screen.register:
        dispatch({ type: types.SCREEN_CHANGE, screen: Screen.register });
        break;
      case Screen.resetPassword:
        dispatch({ type: types.SCREEN_CHANGE, screen: Screen.resetPassword });
        break;
      default:
        dispatch({ type: types.SCREEN_CHANGE, screen: Screen.login });
        break;
    }
  };

  const updatePostModals = (status: boolean) => {
    dispatch({ type: types.ACTIVATE_POST_MODAL, status });
  };

  useEffect(() => {
    detectInternet();
    switchScreens(Screen.login);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        updatePostModals,
        switchScreens
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
