import "react-native-gesture-handler";
import Navigation from "./src/navigation/Navigation";
import store from "./src/context/store";
import { Provider } from "react-redux";
import { TicketProvider } from "./src/context/TicketContext";
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
