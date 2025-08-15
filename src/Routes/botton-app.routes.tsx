import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HouseIcon, ChalkboardIcon, PlusSquareIcon, UserCircleIcon } from "phosphor-react-native";

import { Home } from "@screens/Home";
import { Classroom } from "@screens/classroom";
import { TouchableOpacity } from "react-native";

export type BottomAppParamList = {
    home: undefined;
    classroom: undefined;

}

const { Navigator, Screen } = createBottomTabNavigator<BottomAppParamList>();

export function BottomApp() {
  const insets = useSafeAreaInsets();

  return (
    <Navigator
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarButton: (props: any) => (
          <TouchableOpacity 
            {...props} 
            activeOpacity={1} 
            style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
          />),
        tabBarStyle: {
          backgroundColor: "#fffff",
          borderTopWidth: 0,
          height: 60 + insets.bottom,
        }
      }}
    >
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="classroom"
        component={Classroom}
      />
    </Navigator>
  )
}