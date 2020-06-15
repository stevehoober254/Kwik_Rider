/**
 * @format
 * @flow
 */
import React, { FC, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';
import Styles from '../pages/account/styles';
import AppContext from '../../context/app-context';

type Props = {
  linkLeft: Link;
  linkRight: Link;
};

interface Link {
  pathName?: string;
  routeName?: string;
}

const AccountQuicklinks: FC<Props> = ({
  linkLeft: { pathName, routeName },
  linkRight: { pathName: path, routeName: name },
}) => {
  const { switchScreens } = useContext(AppContext);

  const switchToStepper = (stepper: string) => {
    switchScreens(stepper);
  };
  return (
    <View>
      {routeName && (
        <TouchableOpacity onPress={() => switchToStepper(pathName || '')}>
          <View>
            <Text style={Styles.accountQuickLinks}>{routeName}</Text>
          </View>
        </TouchableOpacity>
      )}
      {name && (
        <TouchableOpacity onPress={() => switchToStepper(path || '')}>
          <View>
            <Text style={Styles.accountQuickLinks}>{name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AccountQuicklinks;
