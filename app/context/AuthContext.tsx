import React, { createContext, useContext, useState } from 'react';
import { Redirect } from 'expo-router';
import { useRouter } from 'expo-router';

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}
function IndexPage() {
  const router = useRouter();
  return <Redirect href="/login" />;
//  // router.replace('/login');
//   return 0;
};
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);
  const context2 = useContext(AuthContext);
  return !context2 ? (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  ) : (
    <IndexPage />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
