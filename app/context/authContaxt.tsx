import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface AuthContextValue {
    isAuthenticated: boolean;
    user: string;
    login: () => void;
    logout: () => void;
}
interface MyComponentProps {
    children: ReactNode;
}
// Create the context with a default value
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Provider component
export const AuthContextProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState('shreaysh');

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    // Provide the context value
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the context
export const UseAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};
