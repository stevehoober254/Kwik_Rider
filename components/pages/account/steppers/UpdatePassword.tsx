/**
 * @format
 * @flow
 */
import React, { FC } from 'react';
import { View } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import Styles from '../styles';
import Theme from '../../../../constant/theme';

const UpdatePassword: FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Input
        placeholder="Old Password"
        value={value}
        textStyle={Theme.inputTheme}
        size="large"
        onChangeText={setValue}
      />
      <Input
        style={Styles.input}
        placeholder="New Password"
        value={value}
        size="large"
        textStyle={Theme.inputTheme}
        onChangeText={setValue}
      />
      <Button textStyle={Theme.buttonTheme} size="large" style={Styles.button}>
        Update
      </Button>
    </View>
  );
};

export default UpdatePassword;
