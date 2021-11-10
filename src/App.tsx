import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider,TextInput } from 'react-native-paper';
import {AppNavigator} from './AppNavigator';

import {theme} from './App.style';

const App:React.FC = () => {
 return (
   <PaperProvider theme={theme}>
     <AppNavigator />
   </PaperProvider>
  );
}

export default App;