import React from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import { useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const UseContext = ({ children }) => {
  // theme toggle state
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  // user state set
  const [user, setUser] = useState(null);
  const [lodding, setLoading] = useState(true);
  // Google Provider
  const googleProvider = new GoogleAuthProvider();
  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Createuser
  const singUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login email and password
  const logInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user profile name an photo
  const updateNamePhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // sing out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // side effect start
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        singInGoogle,
        logOut,
        singUpUser,
        logInEmailPassword,
        updateNamePhoto,
        theme,
        toggleTheme,
        lodding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UseContext;
