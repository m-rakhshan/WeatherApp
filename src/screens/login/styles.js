import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    color: colors.white,
    fontSize: 40,
    marginBottom: 30,
    fontWeight: "bold",
  },
  image: { width: 150, height: 150 },
  welcome: {
    marginTop: 30,
    color: colors.white,
    fontSize: 30,
    fontWeight: "600",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
    leftText: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: "600",
    },
    rightText: {
      color: colors.white,
      fontSize: 16,
      marginLeft: 3,
    },
  },
  touch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 60,
    width: "90%",
    alignItems: "center",
    justifyContent: 'center'
  },
  login: { color: colors.black, fontSize: 18, fontWeight: "bold", marginLeft: 5 },
  google: { width: 35, height: 35 }
});
