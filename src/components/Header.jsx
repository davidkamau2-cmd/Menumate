import React from "react";
import { useAuth } from "../contexts/AuthProvider";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header  className="bg-gray-100 p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold text-gray-800">MenuMate</h1>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-gray-700">{user.displayName || user.email}</span>
            <button onClick={() => logout()}>Sign out</button>
          </>
        ) : (
          <span className="text-gray-500">Not signed in</span>
        )}
      </div>
    </header>
  );
}
