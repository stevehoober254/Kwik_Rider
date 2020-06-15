import { StyleSheet } from 'react-native';
import { defaultTitleFont, defaultWhite } from '../../../constant/theme';

const styles = StyleSheet.create({
  dashboardContainer: {
    height: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  divider: {
    borderBottomColor: defaultWhite,
    borderBottomWidth: 1,
    width: 40
  },
  dashboardBlocks: {
    marginTop: 5,
    marginBottom: 5,
    height: 'auto',
    flexBasis: '48%'
  },
  menuText: {
    fontFamily: defaultTitleFont
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
  },
  containerPaddingTop: {
    justifyContent: 'flex-start',
    minHeight: 650
  },
  badge: {
    width: 23,
    height: 23,
    borderWidth: 2,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 23,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    fontSize: 10
  },
  layout: {
    borderColor: '#e3e3e3',
    margin: 10,
    borderRadius: 4,
    padding: 3,
    backgroundColor: '#F8F9FC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 130
  }
});

export default styles;
