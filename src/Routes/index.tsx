import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { BottomApp } from "./botton-app.routes"
import { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();
  
  const themeNavigation = DefaultTheme;
  
  return(
    <NavigationContainer theme={themeNavigation}>
      <BottomApp />
    </NavigationContainer>
  )
}