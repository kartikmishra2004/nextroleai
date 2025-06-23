import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    return (
        <View style={styles.container}>
            <Text>Login!!</Text>
            <Button onPress={() => login()} title='Login' />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});