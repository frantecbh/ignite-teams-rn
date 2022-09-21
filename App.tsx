import { StatusBar } from 'expo-status-bar';


import { ThemeProvider } from 'styled-components';
 import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from './src/theme';


import { Grupos } from '@screens/Grupos';
import { ActivityIndicator } from 'react-native';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })



  return (
    <ThemeProvider theme={theme}>

      {fontsLoaded ? <Grupos /> : <ActivityIndicator /> }
      
    </ThemeProvider>

  );
}

