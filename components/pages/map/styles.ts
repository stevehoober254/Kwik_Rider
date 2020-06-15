import { Dimensions, StyleSheet } from 'react-native';
import { defaultWhite, primaryBlue } from '../../../constant/theme';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: HEIGHT,
    width: WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btn: {
    width: 100,
    marginTop: -25,
    backgroundColor: primaryBlue,
    borderColor: primaryBlue
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    flexBasis: '40%',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: primaryBlue
  },
  contentWrapper: {
    flexBasis: '60%',
    paddingLeft: 10
  },
  fromTo: {
    color: primaryBlue,
    fontWeight: 'bold'
  },
  floatMenuBar: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1,
    borderBottomColor: primaryBlue,
    padding: 5,
    width: WIDTH,
    height: 50,
    top: 0,
    flex: 1,
    justifyContent: 'center'
  },
  iconMenu: {
    width: 30,
    height: 30
  },
  bottomSection: {
    height: 90,
    width: WIDTH,
    borderColor: primaryBlue,
    borderWidth: 1,
    backgroundColor: defaultWhite,
    padding: 10,
    position: 'absolute',
    flex: 1,
    flexDirection: 'row'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default styles;

