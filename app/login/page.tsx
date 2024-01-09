"use client";

import React, { useEffect } from "react";

import GoogleSignInBtn from "./GoogleSignInBtn";
import { redirect } from "next/navigation";
import { useFirebaseAuthContext } from "../context/FirebaseAuthContext";

const LoginPage = () => {
  const { isLoading, user } = useFirebaseAuthContext();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        redirect("/");
      }
    }
  }, [isLoading, user]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-1/3 flex flex-col items-center p-8 border">
        <h1 className="text-[2rem] font-bold">Create a Twat account</h1>
        <GoogleSignInBtn />
      </div>
    </div>
  );
};

export default LoginPage;
