import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
    login: () => void;
    logout: () => void;
    authenticated: boolean;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const userToken = 'login-token7879063730';

    async function getToken() {
        const token = await AsyncStorage.getItem('token');
        if (token === 'login-token7879063730') setAuthenticated(true);
        setLoading(false);
    }

    useEffect(() => {
        getToken();
    }, []);

    async function login() {
        await AsyncStorage.setItem('token', userToken);
        setAuthenticated(true);
    }

    async function logout() {
        await AsyncStorage.removeItem('token');
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ login, logout, authenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};