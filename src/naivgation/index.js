import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
//custom import
import StackNavigation from "./stack";
import colors from "../constants/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

const Root = () => {
  return (
    //warp navigator inside container
    <NavigationContainer theme={MyTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default Root;
