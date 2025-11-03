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

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      if (firebaseUser?.email) {
        localStorage.setItem("currentUser", firebaseUser.email);
      } else {
        localStorage.removeItem("currentUser");
      }
    });

    return unsubscribe;
  }, []);

  const signup = (email, password) => signUpWithEmail(email, password);
  const login = (email, password) => signInWithEmail(email, password);   // ✅ fixed name
  const loginWithGoogle = () => signInWithGooglePopup();
  const loginWithGithub = () => signInWithGithubPopup();
  const resetPassword = (email) => sendResetEmail(email);

  const signout = async () => {
    await logout();
    localStorage.removeItem("currentUser");  // ✅ clear on signout
  };

  const value = {
    user,
    signup,
    login,
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
