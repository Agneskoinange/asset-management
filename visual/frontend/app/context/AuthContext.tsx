'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authStorage } from '@/app/lib/auth';
import { api } from '@/app/lib/api';

interface User {
  id: string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = authStorage.getAccessToken();
    if (token) {
      try {
        const userData = await api.getMe(token);
        setUser(userData);
      } catch (error) {
        console.error('Auth check failed:', error);
        authStorage.clearTokens();
        setUser(null);
      }
    }
    setLoading(false);
  };

  const login = async (username: string, password: string) => {
    const response = await api.login({ username, password });
    authStorage.setTokens(response.access, response.refresh);
    const userData = await api.getMe(response.access);
    setUser(userData);
  };

  const logout = () => {
    authStorage.clearTokens();
    setUser(null);
  };

  const refreshUser = async () => {
    const token = authStorage.getAccessToken();
    if (token) {
      try {
        const userData = await api.getMe(token);
        setUser(userData);
      } catch (error) {
        console.error('Failed to refresh user:', error);
        logout();
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
