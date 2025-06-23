import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/auth/Onboarding';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgotPassword from '../screens/auth/ForgotPassword';
import ResetPassword from '../screens/auth/ResetPassword';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" options={{ headerShown: false }} component={Onboarding} />
      <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <AuthStack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      <AuthStack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
      <AuthStack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPassword} />
    </AuthStack.Navigator>
  );
}