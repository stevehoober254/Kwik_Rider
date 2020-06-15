/**
 * @format
 * @flow
 */
import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Toggle } from '@ui-kitten/components';
import Styles from '../styles';
import Theme from '../../../../constant/theme';

const UpdateProfile: FC = () => {
  const [value, setValue] = useState('');

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <View>
      <Input
        placeholder="Full Names"
        value={value}
        size="large"
        textStyle={Theme.inputTheme}
        onChangeText={setValue}
      />
      <Input
        style={Styles.input}
        placeholder="Email Address"
        value={value}
        textStyle={Theme.inputTheme}
        size="large"
        onChangeText={setValue}
      />
      <Input
        style={Styles.input}
        placeholder="Phone Number."
        value={value}
        textStyle={Theme.inputTheme}
        size="large"
        onChangeText={setValue}
      />
      <Button textStyle={Theme.buttonTheme} size="large" style={Styles.button}>
        Update
      </Button>

      <View style={Styles.offlineWrapper}>
        <Text style={Styles.offlineOnlineText}>
          manage: <Text style={Styles.onlineColor}>Online</Text> /{' '}
          <Text style={Styles.offlineColor}>Offline</Text>{' '}
          status
        </Text>
        <Toggle
          style={{ marginTop: 40 }}
          checked={checked}
          onChange={onCheckedChange}
        />
      </View>
    </View>
  );
};

export default UpdateProfile;
