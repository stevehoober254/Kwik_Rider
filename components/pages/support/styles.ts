import { Dimensions, StyleSheet } from 'react-native';
import {
  defaultFont,
  defaultGray,
  defaultTitleFont,
  primaryBlue
} from '../../../constant/theme';
const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  supportContainer: {
    width: DeviceWidth - 20,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 1
  },
  searchInput: {
    fontFamily: defaultTitleFont
  },
  card: {
    marginTop: 4
  },
  faq: {
    fontFamily: defaultTitleFont,
    color: primaryBlue,
    fontSize: 16,
    marginBottom: 5
  },
  answer: {
    color: defaultGray,
    fontFamily: defaultFont,
    lineHeight: 17,
    letterSpacing: 0.2
  }
});

export default styles;
