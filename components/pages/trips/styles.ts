import { StyleSheet } from 'react-native';
import {
  defaultFont,
  defaultTitleFont,
  primaryBlue
} from '../../../constant/theme';

const styles = StyleSheet.create({
  containerPaddingTop: {
    justifyContent: 'flex-start',
    minHeight: 650
  },
  listItem: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    padding: 2,
  },
  activeTrips: {
    borderColor: primaryBlue,
    backgroundColor: 'rgba(0,173,229, 0.1)'
  },
  title: {
    fontFamily: defaultTitleFont,
    fontSize: 13
  },
  to: {
    fontFamily: defaultFont,
    color: primaryBlue,
    textTransform: 'uppercase',
    fontSize: 9
  },
  imageProfile: {
    width: 50,
    height: 40
  },
  imageProfileContainer: {
    flexBasis: '20%',
    flex: 1,
    justifyContent: 'center'
  },
  profileDesc: {
    flexBasis: '65%',
    flex: 1,
    justifyContent: 'center'
  },
  time: {
    flexBasis: '15%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  timeText: {
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: defaultTitleFont,
    color: '#999'
  },
  tripStatus: {
    color: primaryBlue,
    fontSize: 8,
    fontWeight: 'bold'
  }
});

export default styles;
