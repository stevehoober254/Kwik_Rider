/**
 * @format
 * @flow
 */
import React, { FC } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { light as lightTheme, mapping } from '@eva-design/eva';
import { default as theme } from '../assets/staticData/custom-theme.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import GlobalContext from '../context';
import ReduxRoot from '../store/components/ReduxRoot';
import Routes from '../routes/Routes';

const App: FC = () => {
  return (
    <ReduxRoot>
      <GlobalContext>
        <SafeAreaProvider>
          <ApplicationProvider
            mapping={mapping}
            theme={{ ...lightTheme, ...theme }}
          >
            <IconRegistry icons={EvaIconsPack} />
            <Routes />
          </ApplicationProvider>
        </SafeAreaProvider>
      </GlobalContext>
    </ReduxRoot>
  );
};

export default App;
