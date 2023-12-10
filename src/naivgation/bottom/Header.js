import {
  TouchableOpacity,
  Image,
  View,
  NativeModules,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react-native";
const { StatusBarManager } = NativeModules;
//custom imports
import styles from "./styles";
import colors from "../../constants/colors";
import { setToken } from "../../redux/slices/userSlice";
import { useAuth0 } from "react-native-auth0";
import { useDispatch } from "react-redux";
const logo = require("../../assets/appLogo.png");

const Header = (navigation) => {
  const [height, setHeight] = useState(0);
  const { clearSession } = useAuth0();
  const dispatch = useDispatch();
  //statusBar height check for iOS devices
  useEffect(() => {
    Platform.OS == "ios"
      ? StatusBarManager.getHeight((statusBarHeight) => {
          const { height } = statusBarHeight;
          setHeight(height);
        })
      : setHeight(StatusBar.currentHeight);
  }, []);
  //clear session and logout
  const onPress = async () => {
    try {
      dispatch(setToken(""));
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ ...styles.container, paddingTop: height }}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.header}
        onPress={() => navigation.navigate("Weather")}
      >
        <Image source={logo} style={{ width: 45, height: 45 }} />
        <Text style={styles.headerText}>Weather Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ alignSelf: "center", marginRight: 10 }}
        onPress={onPress}
      >
        <LogOut size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
