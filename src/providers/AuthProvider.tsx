"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "staff" | "customer";
}

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Giả lập kiểm tra token khi reload trang
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login mock
  const login = async (email: string, password: string): Promise<boolean> => {
    // ❗ Đây là database giả (có thể đổi theo DB thật sau)
    if (email === "admin@example.com" && password === "123456") {
      const fakeUser: User = {
        id: 1,
        name: "Quản trị viên",
        email,
        role: "admin",
      };

      localStorage.setItem("token", "mock-token-123");
      localStorage.setItem("user", JSON.stringify(fakeUser));

      setUser(fakeUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook tiện dùng
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth phải nằm trong <AuthProvider>");
  }
  return ctx;
};
