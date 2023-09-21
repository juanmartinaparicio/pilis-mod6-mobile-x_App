import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CarritoScreen from '../screens/CarritoScreen';
import ListaProductos from '../screens/ListaProductos';
import Settings from '../screens/Settings';
import SplashScreen from '../screens/SplashScreen';

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
                tabBarShowLabel: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === 'Menu') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Carrito') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name='Menu' component={SplashScreen}  />
      <Tab.Screen name='Carrito' component={CarritoScreen} /* options={{ tabBarBadge: 3 }} *//>
      <Tab.Screen name='settings' component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
