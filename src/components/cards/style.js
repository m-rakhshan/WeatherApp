import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light_gray,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  icon: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginLeft: 10,
    borderColor:colors.black
  },
  innerContainer: {
    width: width - 95,
    marginHorizontal: 10,
    textId: {
      fontSize: 16,
      color: colors.black,
      fontWeight: '600'
    },
    letter: { fontSize: 16, color: colors.gray },
    time: { alignSelf: 'center', marginLeft: 5, color:colors.black }
  },
});
