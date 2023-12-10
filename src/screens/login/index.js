import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  View,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { useAuth0 } from "react-native-auth0";
//redux slice
import { setToken } from "../../redux/slices/userSlice";
//custom imports
import styles from "./styles";
import colors from "../../constants/colors";
//assets
const logo = require("../../assets/appLogo.png");
const googleIcon = require("../../assets/googleIcon.png");

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { authorize } = useAuth0();
  //getting user info using autho
  const onPress = async () => {
    try {
      setLoading(true);
      const auth = await authorize();
      if (auth?.accessToken) dispatch(setToken(auth.accessToken));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Weather Forecast</Text>
      <Image resizeMode="contain" source={logo} style={styles.image} />
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerContainer.leftText}>Revolutionsing</Text>
        <Text style={styles.innerContainer.rightText}>Weather Conditions</Text>
      </View>
      <TouchableOpacity
        disabled={loading}
        activeOpacity={0.8}
        style={styles.touch}
        onPress={() => onPress()}
      >
        <Image source={googleIcon} style={styles.google} />
        <Text style={styles.login}>
          {loading ? (
            <ActivityIndicator size={"small"} color={colors.button} />
          ) : (
            "Sign in with Google"
          )}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Login;
