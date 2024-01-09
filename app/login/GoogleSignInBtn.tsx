"use client";

import React from "react";
import { useFirebaseAuthContext } from "../context/FirebaseAuthContext";

const GoogleSignInBtn = () => {
  const { signInWithGoogle } = useFirebaseAuthContext();
  return (
    <button
      className="font-bold text-white bg-blue-500 px-6 py-2"
      onClick={signInWithGoogle}
    >
      Sign in With Google
    </button>
  );
};

export default GoogleSignInBtn;
