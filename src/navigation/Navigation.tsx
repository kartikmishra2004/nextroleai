import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

const RootStack = createStackNavigator();

export default function Navigation() {
    const { authenticated, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        )
    }

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