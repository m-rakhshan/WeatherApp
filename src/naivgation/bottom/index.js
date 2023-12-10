import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//custom import
import { tabScreens } from "./routes";
import Header from "./Header";
import colors from "../../constants/colors";
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({ navigation }) => <Header {...navigation} />,
        tabBarHideOnKeyboard: true,
        animationEnabled: true,
        animationTypeForReplace: 'push'
        // cardStyleInterpolator: ({ current,layouts }) => ({
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
      {tabScreens.map((item) => (
        <Tab.Screen
          key={item.id}
          name={item.name}
          component={item.component}
          options={{
            ...item.option,
            tabBarIcon: ({ focused }) => {
              return (
                focused
                  ? item.icon(30, colors.primary)
                  : item.icon(30, colors.button)
              )
            }
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomNavigation;
