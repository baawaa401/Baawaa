import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User } from '@firebase/auth';
import { auth } from '../Firebase.jsx'

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
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logout = () => {
        setIsAuthenticated(false);
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
            if (currentUser) {
                // User is signed in
                setUser(currentUser.displayName || 'Unknown User');
            } else {
                // User is signed out
                setUser(''); // Or whatever default value you want to set
            }
        });
        return () => unsubscribe();
    }, [user]);

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
