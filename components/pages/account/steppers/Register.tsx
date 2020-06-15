/**
 * @format
 * @flow
 */
import React, { FC } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import Styles from '../styles';
import AccountQuicklinks from '../../../shareable/AccountQuicklinks';
import Screen from '../../../../models/enums/account';
import Theme from '../../../../constant/theme';

const Register: FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Input
        placeholder="Phone Number"
        value={value}
        size="large"
        textStyle={Theme.inputTheme}
        onChangeText={setValue}
      />
      <Input
        style={Styles.input}
        placeholder="Password"
        textStyle={Theme.inputTheme}
        value={value}
        size="large"
        onChangeText={setValue}
      />
      <Button textStyle={Theme.buttonTheme} size="large" style={Styles.button}>
        Register
      </Button>

      <AccountQuicklinks
        linkLeft={{ pathName: Screen.login, routeName: 'Login' }}
        linkRight={{}}
      />
    </View>
  );
};

export default Register;
