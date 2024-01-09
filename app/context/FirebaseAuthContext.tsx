"use client";

import {
  Auth,
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { clientApp } from "../firebase/clientApp";

const signInWithGoogle = () => {
  signInWithPopup(getAuth(clientApp), new GoogleAuthProvider());
};

const signOut = () => {
  getAuth(clientApp).signOut();
};

export const FirebaseAuthContext = createContext<{
  auth: Auth;
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}>({
  auth: getAuth(clientApp),
  user: null,
  isLoading: true,
  signInWithGoogle,
  signOut,
});

const useFirebaseAuthContext = () => useContext(FirebaseAuthContext);

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(clientApp);

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{ auth, user, isLoading, signInWithGoogle, signOut }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export { useFirebaseAuthContext, FirebaseProvider };
