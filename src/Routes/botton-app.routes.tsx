import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { Home } from "@screens/Home";
import { Classroom } from "@screens/classroom";
import { Profile } from "@screens/Profile";
import { Login } from "@screens/Login";
import theme from "@theme/index";


export type BottomAppParamList = {
    home: undefined;
    classroom: undefined;
    profile: undefined;
    login: undefined;

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
          backgroundColor: theme.COLORS.MIDNIGHT_BLUE,
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

      <Screen 
        name="profile"
        component={Profile}
      />

     
    </Navigator>
  )
}