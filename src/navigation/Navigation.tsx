import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../context/AuthContext';

const RootStack = createStackNavigator();

export default function Navigation() {
    const { authenticated } = useAuth();
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {authenticated ? (
                    <RootStack.Screen name="App" options={{ headerShown: false }} component={AppNavigator} />
                ) : (
                    <RootStack.Screen name="Auth" options={{ headerShown: false }} component={AuthNavigator} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}