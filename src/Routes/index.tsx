import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Login } from "@screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomApp } from "./botton-app.routes"
import { useTheme } from "styled-components/native";
import { Title } from "@screens/classroom/styles";


export type RootStackParamList = {
  Login: undefined;
  App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  const theme = useTheme();
  
  const themeNavigation = DefaultTheme;
  
  return(
    <NavigationContainer theme={themeNavigation}>
      <Stack.Navigator 
        screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="App" component={BottomApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}