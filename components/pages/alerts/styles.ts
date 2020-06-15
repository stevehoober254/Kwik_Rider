import { StyleSheet } from 'react-native';
import {
  defaultFont,
  defaultGray,
  defaultTitleFont,
  primaryBlue,
  primaryRed,
  secondaryFont
} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftPartition: {
    flexBasis: '20%',
    alignItems: 'center'
  },
  rightPartition: {
    flexBasis: '80%',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    paddingLeft: 16,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  },
  imageProfile: {
    borderRadius: 50,
    width: 50,
    height: 50
  },
  name: {
    fontSize: 13,
    fontFamily: defaultTitleFont,
    color: primaryBlue
  },
  description: {
    fontSize: 12,
    color: defaultGray,
    fontFamily: defaultFont,
    marginTop: 10
  },
  time: {
    fontSize: 10,
    fontFamily: secondaryFont,
    marginTop: 5,
    color: defaultGray
  },
  label: {
    textDecorationLine: 'underline',
    textDecorationColor: primaryBlue,
    textDecorationStyle: 'solid',
    fontSize: 9
  },
  button: {
    backgroundColor: primaryBlue,
    borderColor: primaryBlue,
    fontWeight: 'normal',
  },
  callToAction: {
    flexBasis: '30%',
    paddingRight: 2
  },
  content: {
    flexBasis: '70%'
  },
  btnText: {
    fontSize: 9,
    fontWeight: 'bold'
  },
  rejectBtn: {
    backgroundColor: primaryRed,
    borderColor: primaryRed,
    marginTop: 2
  }
});

export default styles;
