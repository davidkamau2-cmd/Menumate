import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthChange,
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInWithEmail,
  signUpWithEmail,
  logout,
  sendResetEmail,
} from "../firebase";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Watch Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // ✅ Auth functions connected to Firebase
  const signup = (email, password) => signUpWithEmail(email, password);
  const loginWithEmail = (email, password) => signInWithEmail(email, password);
  const loginWithGoogle = () => signInWithGooglePopup();
  const loginWithGithub = () => signInWithGithubPopup();
  const resetPassword = (email) => sendResetEmail(email);
  const signout = () => logout();

  const value = {
    user,
    signup,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    resetPassword,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : (
        <div className="text-center py-10 text-xl font-semibold">
          Checking authentication...
        </div>
      )}
    </AuthContext.Provider>
  );
}
useEffect(() => {
  const unsubscribe = onAuthChange((firebaseUser) => {
    console.log("🔥 Firebase user:", firebaseUser);
    setUser(firebaseUser);
    setLoading(false);
  });

  return unsubscribe;
}, []);