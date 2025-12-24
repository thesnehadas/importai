import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  userName: string | null;
  login: (token: string, userName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('auth_token');
  });
  const [userName, setUserName] = useState<string | null>(() => {
    return localStorage.getItem('user_name');
  });

  const login = (newToken: string, name: string) => {
    setToken(newToken);
    setUserName(name);
    localStorage.setItem('auth_token', newToken);
    localStorage.setItem('user_name', name);
  };

  const logout = () => {
    setToken(null);
    setUserName(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
