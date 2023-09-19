import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { TicketProvider } from './src/context/TicketContext';
import store from './src/context/store';
import Navigation from './src/navigation/Navigation';
//import CarritoContext from "./src/context/carritoContext";

export default function App() {
  return (
    <Provider store={store}>
      <TicketProvider>
        <Navigation />
      </TicketProvider>
    </Provider>
  );
}
