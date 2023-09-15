import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext("default-value");
const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // sign up with email pass
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email pass
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  //state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // context values
  const value = { user, isLoading, signUp, signIn, googleSignIn, logOut };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
