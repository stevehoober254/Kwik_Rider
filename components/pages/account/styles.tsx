import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import {
  defaultTitleFont,
  defaultGray,
  primaryBlue,
  defaultWhite,
  grayColor
} from '../../../constant/theme';
const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containerPaddingTop: {
    paddingTop: 7,
    width: DeviceWidth - 120,
    marginHorizontal: 60
  },
  logoWrapper: {
    borderColor: '#e3e3e3',
    borderWidth: 1,
    padding: 5,
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 30
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  logoText: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 100,
    fontFamily: defaultTitleFont
  },
  subTitle: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 15,
    fontFamily: defaultTitleFont
  },
  input: {
    marginTop: 5
  },
  button: {
    marginTop: 20,
    backgroundColor: primaryBlue,
    borderColor: primaryBlue,
    fontWeight: 'normal'
  },
  accountQuickLinks: {
    textAlign: 'right',
    marginTop: 20,
    color: defaultGray,
    fontFamily: defaultTitleFont
  },
  settings: {
    paddingTop: 30,
    width: DeviceWidth - 120,
    marginHorizontal: 60
  },
  driveToggle: {
    marginTop: 14,
    marginBottom: 10
  },
  label: {
    color: defaultGray,
    fontFamily: defaultTitleFont,
    fontSize: 14,
    marginTop: 10
  },
  profileAvatar: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: primaryBlue,
    borderRadius: 150,
    marginHorizontal: 70,
    marginTop: 50
  },
  imageProfile: {
    borderRadius: 150,
    width: 150,
    height: 150
  },
  uploadImgArea: {
    borderColor: defaultGray,
    borderWidth: 1,
    height: 100,
    borderStyle: 'dashed'
  },
  uploadImgText: {
    textAlign: 'center',
    color: defaultGray,
    fontFamily: defaultTitleFont,
    marginTop: 20
  },
  menuTab: {
    width: DeviceWidth,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5
  },
  touchTab: {
    borderColor: primaryBlue,
    width: DeviceWidth / 3,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    backgroundColor: primaryBlue
  },
  activeText: {
    color: defaultWhite
  },
  tabText: {
    fontFamily: defaultTitleFont,
    textTransform: 'uppercase'
  },
  offlineOnlineText: {
    textTransform: 'uppercase',
    marginTop: 50,
    textAlign: 'center'
  },
  onlineColor: {
    fontWeight: 'bold',
    color: primaryBlue
  },
  offlineColor: {
    color: grayColor,
    fontWeight: 'bold'
  },
  offlineWrapper: {
    //
  }
});

export default styles;
