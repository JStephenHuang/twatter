"use client";

import React from "react";
import { useFirebaseContext } from "../context/FirebaseContext";

const GoogleSignInBtn = () => {
  const { signInWithGoogle } = useFirebaseContext();
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
