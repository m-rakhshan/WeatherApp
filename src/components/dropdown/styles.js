import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 18,
  },
  selectedText: {
    alignSelf: 'center',
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  dropdownContainer: {
    position: 'absolute',
    width: width,
    zIndex: 1,
    backgroundColor: colors.transparent,
    height: height,
  },
  innerContainer: (index, isOpenIndex) =>
    index == isOpenIndex
      ? {
          backgroundColor: colors.primary_teal,
          flexDirection: 'row',
        }
      : {
          borderTopWidth: 1,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: colors.light_gray,
        },
  selectedValue: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.light_gray,
  },
  dropdownItem: (index, isOpenIndex) =>
    index == isOpenIndex
      ? {
          paddingVertical: 10,
          color: colors.white,
          marginLeft: 2,
          fontSize: 15,
        }
      : {
          paddingVertical: 10,
          color: colors.black,
          marginLeft: 2,
          fontSize: 15,
        },
});
