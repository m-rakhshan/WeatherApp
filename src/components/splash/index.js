import { View, ActivityIndicator } from "react-native";
//custom import
import styles from "./styles";
import colors from "../../constants/colors";
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>
  );
};
export default SplashScreen;
