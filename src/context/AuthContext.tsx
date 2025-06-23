import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    login: () => void;
    authenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [authenticated, setAuthenticated] = useState(false);

    function login() {
        setAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{ login, authenticated }}>
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