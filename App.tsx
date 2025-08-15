
import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';


import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Routes } from 'src/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold })

  return (
    <SafeAreaProvider>
      
      <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </ThemeProvider>
      </SafeAreaProvider>
  );
}
