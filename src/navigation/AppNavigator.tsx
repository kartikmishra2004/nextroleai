import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import Settings from '../screens/main/Settings';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
      <Tab.Screen name="Settings" options={{ headerShown: false }} component={Settings} />
    </Tab.Navigator>
  );
}