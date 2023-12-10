import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    backgroundColor: colors.white
  },
  icon: { alignSelf: 'center', marginHorizontal: 5 },
  button: {
    container: {
      position: 'absolute',
      backgroundColor: colors.primary,
      bottom: '5%',
      right: '5%',
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 55,
      borderRadius: 5,
    },
    image: { width: 20, height: 20, alignSelf: 'center' },
    text: { color: colors.white, fontSize: 20, marginLeft: 5 },
  },
  swipeableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
  },
  swipeableTrash: {
    backgroundColor: colors.danger,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  emptyText: {
    fontSize: 18, fontWeight: '600', color: colors.gray
  }
});
