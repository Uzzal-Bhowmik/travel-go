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
import Swal from "sweetalert2";

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

  // check admin login state
  const [admin, setAdmin] = useState("false");
  useEffect(() => {
    setAdmin(localStorage.getItem("admin"));
  }, [user]);

  const handleAdminLogin = () => {
    Swal.fire({
      title: "Admin Login",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Admin username">
        <input type="password" id="password" class="swal2-input" placeholder="Admin password">`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        }
        return { login: login, password: password };
      },
    }).then((result) => {
      if (
        result.value.login === import.meta.env.VITE_ADMIN_USERNAME &&
        result.value.password === import.meta.env.VITE_ADMIN_PASSWORD
      ) {
        localStorage.setItem("admin", true);
        setAdmin("true");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Admin Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setAdmin("false");

        Swal.fire({
          position: "center",
          icon: "error",
          title: "Admin Login Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleAdminLogout = () => {
    if (localStorage.getItem("admin")) localStorage.removeItem("admin");
    setAdmin("false");
  };

  //state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);

      if (!currentUser) {
        localStorage.removeItem("admin");
      }
    });

    return () => unsubscribe();
  }, []);

  // context values
  const value = {
    user,
    isLoading,
    signUp,
    signIn,
    googleSignIn,
    logOut,
    handleAdminLogin,
    handleAdminLogout,
    admin,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
