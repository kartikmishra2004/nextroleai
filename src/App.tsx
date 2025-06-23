import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    const textColor = isDarkMode ? '#ffffff' : '#000000';

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
            <StatusBar backgroundColor={isDarkMode ? '#000' : '#fff'} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={{ color: textColor }}>Hello world!!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;