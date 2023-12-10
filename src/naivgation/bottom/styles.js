import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: colors.button,
    justifyContent: "space-between",
  },
  header: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  headerText: {
    color: colors.primary,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 7,
  },
  logo: {
    width: 180,
    height: 60,
  },
  menu: {
    width: 30,
    height: 30,
  },
});
