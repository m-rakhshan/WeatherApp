import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { setUser } from "../../redux/slices/userSlice";
import { useAuth0 } from "react-native-auth0";
//custom components
import { authScreens } from "./publicRoutes";
import { privateScreens } from "./privateRoutes";
//redux states
import { useSelector, useDispatch } from "react-redux";

const Stack = createStackNavigator();
const StackNavigation = () => {
  const { user } = useAuth0();
  const token = useSelector((state) => state.user.token);
  const info = useSelector((state) => state.user.info);
  const dispatch = useDispatch();
  //set google user information
  useEffect(() => {
    if (info == null) {
      dispatch(setUser(user));
    }
  }, [token]);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          animationTypeForReplace: 'push'
          // cardStyleInterpolator: ({ current, layouts }) => ({
          //   cardStyle: {
          //     transform: [
          //       {
          //         translateY: current.progress.interpolate({
          //           inputRange: [0, 1],
          //           outputRange: [layouts.screen.height, 0],
          //         }),
          //       },
          //     ]
          //   }
          // })
        }}
      >
        {/* Public routes */}
        {!token
          ? authScreens.map((item) => (
            <Stack.Screen
              options={{ headerShown: false }}
              key={item.id}
              name={item.name}
              component={item.component}
            />
          ))
          : /*Private routes*/
          privateScreens.map((item) => (
            <Stack.Screen
              key={item.id}
              name={item.name}
              component={item.component}
              options={{ headerShown: false }}
            />
          ))}
      </Stack.Navigator>
    </>
  );
};
export default StackNavigation;
