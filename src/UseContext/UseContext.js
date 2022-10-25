import React from "react";
import { createContext } from "react";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const UseContext = ({ children }) => {
  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  const singInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  return (
    <AuthContext.Provider value={{ singInGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UseContext;
