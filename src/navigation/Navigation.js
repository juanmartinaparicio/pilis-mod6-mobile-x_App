import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import ListaProductos from "../screens/ListaProductos";
import Settings from "../screens/Settings";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "SplashScreen") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "settings") {
                        iconName = focused ? "settings" : "settings-outline";
                    } else if (route.name === "Lista") {
                        iconName = focused ? "notifications" : "notifications-outline";
                    }
                    return <Ionicons name={iconName} color={color} size={size}
                    />
                }

            })}
        >
            <Tab.Screen name="SplashScreen" component={SplashScreen} />
            <Tab.Screen name="Lista" component={ListaProductos} />
            <Tab.Screen name="settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>)
}