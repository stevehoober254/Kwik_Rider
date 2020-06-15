/**
 * @format
 * @flow
 */

import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@ui-kitten/components';
import Styles from '../styles';
import AccountQuicklinks from '../../../shareable/AccountQuicklinks';
import Screen from '../../../../models/enums/account';
import { dashboard } from '../../../../constant/path';
import Theme from '../../../../constant/theme';

type Props = {
  navigateTo: (routeName: string) => void;
};

const Login: FC<Props> = ({ navigateTo }) => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Input
        textStyle={Theme.inputTheme}
        placeholder="Phone Number"
        value={value}
        size="large"
        onChangeText={setValue}
      />
      <Input
        style={Styles.input}
        textStyle={Theme.inputTheme}
        placeholder="Password"
        value={value}
        size="large"
        onChangeText={setValue}
      />
      <Button
        size="large"
        style={Styles.button}
        textStyle={Theme.buttonTheme}
        onPress={() => navigateTo(dashboard)}
      >
        Login
      </Button>

      <AccountQuicklinks
        linkLeft={{ pathName: Screen.register, routeName: 'Register' }}
        linkRight={{
          pathName: Screen.resetPassword,
          routeName: 'Forgot your password ?'
        }}
      />
    </View>
  );
};

export default Login;
