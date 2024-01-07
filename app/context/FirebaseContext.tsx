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

export const FirebaseContext = createContext<{
  auth: Auth;
  user: User | null;
  isUserLoading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}>({
  auth: getAuth(clientApp),
  user: null,
  isUserLoading: true,
  signInWithGoogle,
  signOut,
});

const useFirebaseContext = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(clientApp);

  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);

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
        setIsUserLoading(false);
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{ auth, user, isUserLoading, signInWithGoogle, signOut }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { useFirebaseContext, FirebaseProvider };
