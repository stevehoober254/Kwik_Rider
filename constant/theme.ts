import { StyleSheet } from 'react-native';

export const primaryBlue = '#00ade5';
export const defaultWhite = '#FFFFFF';
export const primaryGreen = '#1F4360';
export const defaultGray = '#666';
export const primaryRed = '#D74456';
export const grayColor = '#999';

export const defaultFont = 'source_sans_pro_regular';
export const defaultTitleFont = 'work_sans_variable_font_wght';
export const secondaryFont = 'dosis_variable_font_wght';

export const inputNavTitle = {
  color: defaultWhite,
  textTransform: 'uppercase',
  fontSize: 15
};

const Theme = StyleSheet.create({
  inputTheme: {
    fontWeight: 'normal',
    fontFamily: defaultFont
  },
  buttonTheme: {
    fontWeight: 'normal',
    fontFamily: defaultTitleFont,
    textTransform: 'uppercase',
    fontSize: 14
  },
  inputNavTitle: {
    fontFamily: defaultFont,
    fontSize: 18
  }
});

export default Theme;
