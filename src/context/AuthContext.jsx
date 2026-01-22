import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    { email: "admin@kithan.com", password: "admin123", name: "Admin User" },
  ]);

  const signup = (email, password, name) => {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return { success: false, message: "Email already registered" };
    }
    const newUser = { email, password, name };
    setUsers([...users, newUser]);
    return { success: true, message: "Signup successful! Please login." };
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setIsLoggedIn(true);
      setUser({ email: foundUser.email, name: foundUser.name });
      return { success: true, message: "Login successful!" };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const forgotPassword = (email) => {
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return {
        success: true,
        message: "Password reset link sent to your email",
      };
    }
    return { success: false, message: "Email not found" };
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, signup, login, logout, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
