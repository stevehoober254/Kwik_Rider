import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { defaultWhite, inputNavTitle, primaryBlue } from '../constant/theme';
import Dashboard from '../components/pages/dashboard';
import { Icon } from '@ui-kitten/components';
import Trips from '../components/pages/trips';
import Alerts from '../components/pages/alerts';
import Support from '../components/pages/support';
import { createStackNavigator } from '@react-navigation/stack';
import Account, { Settings } from '../components/pages/account';
import Map from '../components/pages/map';
import { useNetInfo } from '@react-native-community/netinfo';
import { ToastAndroid } from 'react-native';

const Stack = createStackNavigator();

const Routes = () => {
  const netInfo = useNetInfo();

  const showToast = () => {
    ToastAndroid.show('No Internet Connection!', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (!netInfo.isConnected) {
      showToast();
    }
  }, [netInfo.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Account'}
        screenOptions={{
          headerStyle: {
            backgroundColor: primaryBlue
          },
          headerTintColor: defaultWhite
        }}
      >
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: 'Kwik', headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={Dashboard}
        />
        <Stack.Screen
          name="Map"
          options={{ headerShown: false }}
          component={Map}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: inputNavTitle
          }}
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          name="Trips"
          options={{
            headerTitleStyle: inputNavTitle,
            headerRight: () => (
              <Icon
                name="trash-2-outline"
                width={32}
                height={32}
                fill={defaultWhite}
              />
            )
          }}
          component={Trips}
        />
        <Stack.Screen
          name="Alerts"
          options={{
            headerTitleStyle: inputNavTitle,
            headerRight: () => (
              <Icon
                name="trash-2-outline"
                width={32}
                height={32}
                fill={defaultWhite}
              />
            )
          }}
          component={Alerts}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: inputNavTitle
          }}
          name="Support"
          component={Support}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
