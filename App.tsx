import { StatusBar } from 'expo-status-bar';

import { Grupos } from '@screens/Grupos';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grupos />
    </ThemeProvider>

  );
}

