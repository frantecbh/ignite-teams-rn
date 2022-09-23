import { StatusBar } from 'react-native';


import { ThemeProvider } from 'styled-components';
 import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from './src/theme';


import { Grupos } from '@screens/Grupos';
import { Loading } from '@components/Loading';
import { NewGroup } from '@screens/NewGroup';



export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })



  return (
    <ThemeProvider theme={theme}>

      {fontsLoaded ? <NewGroup /> : <Loading /> }
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent />
    </ThemeProvider>
    
  );
}

