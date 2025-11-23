import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthGoogle = ({ onUserChange }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Observa cambios de sesión
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (onUserChange) {
        onUserChange(currentUser);
      }
    });

    return () => unsubscribe();
  }, [onUserChange]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h4>Autenticación con Google</h4>
        {user ? (
          <p className="mb-0">
            Sesión iniciada como: <strong>{user.displayName}</strong>{" "}
            ({user.email})
          </p>
        ) : (
          <p className="mb-0">No has iniciado sesión.</p>
        )}
      </div>

      <div>
        {user ? (
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        ) : (
          <button className="btn btn-outline-primary" onClick={handleLogin}>
            Iniciar sesión con Google
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthGoogle;
