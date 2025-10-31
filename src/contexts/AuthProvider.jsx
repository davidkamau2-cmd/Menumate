import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthChange,
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInWithEmail,
  signUpWithEmail,
  logout,
  sendResetEmail
} from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

 signup(email, password)
loginWithEmail(email, password)
logout()
resetPassword(email)


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && <div className="auth-loading">Checking authentication...</div>}
    </AuthContext.Provider>
  );
}
