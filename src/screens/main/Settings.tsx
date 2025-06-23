import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext';

const Settings = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Settings!!</Text>
      <Button onPress={() => logout()} title='Logout' />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});