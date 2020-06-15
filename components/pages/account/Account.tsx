/**
 * @format
 * @flow
 */
import React, { Dispatch, FC, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles';
import AppContext from '../../../context/app-context';
import Screen from '../../../models/enums/account';
import { defaultTitleFont } from '../../../constant/theme';
import { login, passResetRequest, register } from '../../../store/actions';
import { connect } from 'react-redux';
import { Account } from '../../../models';
import { Login, Register, ResetPassword } from './steppers';

type SignInUp = Pick<Account, 'phoneNumber' | 'password'>;
type resetP = Pick<Account, 'phoneNumber'>;

type Props = {
  navigation: any;
  signIn: (data: SignInUp) => void;
  signUp: (data: SignInUp) => void;
  resetPass: (phoneNumber: resetP) => void;
};

const AccountPage: FC<Props> = ({ navigation }) => {
  const { screen } = useContext(AppContext);

  const navigateTo = (routeName: string) => {
    navigation.navigate(routeName, {});
  };

  return (
    <View style={Styles.containerPaddingTop}>
      <View style={Styles.logoWrapper}>
        <Image
          style={Styles.logo}
          source={require('../../../assets/images/kwik.png')}
        />
      </View>
      <View>
        <Text style={{ fontFamily: defaultTitleFont }}>Proceed to</Text>
        <Text style={Styles.subTitle}>
          {screen === Screen.login && 'Login'}
          {screen === Screen.register && 'Register'}
          {screen === Screen.resetPassword && 'Reset Password'}
        </Text>
      </View>

      {screen === Screen.login && <Login navigateTo={navigateTo} />}
      {screen === Screen.register && <Register />}
      {screen === Screen.resetPassword && <ResetPassword />}
    </View>
  );
};

const mapToDispatch = (dispatch: Dispatch<any>) => ({
  signIn: (data: SignInUp) => {
    return dispatch(login(data));
  },
  signUp: (data: SignInUp) => {
    return dispatch(register(data));
  },
  resetPass: (phoneNumber: resetP) => {
    return dispatch(passResetRequest(phoneNumber));
  }
});
export default connect(null, mapToDispatch)(AccountPage);
