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

  // Fetch user info if token exists but userName doesn't
  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedToken = localStorage.getItem('auth_token');
      const storedUserName = localStorage.getItem('user_name');
      
      if (storedToken && !storedUserName) {
        try {
          const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
          const response = await fetch(`${apiUrl}/api/auth/me`, {
            headers: {
              'Authorization': `Bearer ${storedToken}`,
            },
          });
          
          if (response.ok) {
            const user = await response.json();
            if (user.name) {
              setUserName(user.name);
              localStorage.setItem('user_name', user.name);
            }
          }
        } catch (error) {
          console.error('Failed to fetch user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, []);

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
