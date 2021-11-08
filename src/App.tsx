import React from 'react';
import { Provider as PaperProvider,TextInput } from 'react-native-paper';
import Login from './screens/Login';
import Register from './screens/Register';
import {Home} from './screens/Home';
import {Deliveries} from './screens/Deliveries';

import {theme} from './App.style';

const App:React.FC = () => {
 return (
   <PaperProvider theme={theme}>
     <Deliveries />
   </PaperProvider>
  );
}

export default App;