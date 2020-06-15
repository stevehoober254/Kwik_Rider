import {createContext} from 'react';

const AppContext = createContext({
  screen: '',
  updatesModalStatus: false,
  updatePostModal: (status: boolean) => {},
  switchScreens: (screen: string) => {},
});

export default AppContext;
