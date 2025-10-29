import React from "react";
import { useAuth } from "../contexts/AuthProvider";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header>
      <h1>MenuMate</h1>
      <div>
        {user ? (
          <>
            <span>{user.displayName || user.email}</span>
            <button onClick={() => logout()}>Sign out</button>
          </>
        ) : (
          <span>Not signed in</span>
        )}
      </div>
    </header>
  );
}
