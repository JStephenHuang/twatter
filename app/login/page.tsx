"use client";

import React, { useEffect } from "react";

import GoogleSignInBtn from "./GoogleSignInBtn";
import { redirect } from "next/navigation";
import { useFirebaseContext } from "../context/FirebaseContext";

const LoginPage = () => {
  const { isUserLoading, user } = useFirebaseContext();

  useEffect(() => {
    if (!isUserLoading) {
      // You know that the user is loaded: either logged in or out!

      if (user) {
        redirect("/");
      }
    }
    // You also have your firebase app initialized
  }, [isUserLoading, user]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-1/3 flex flex-col items-center p-8 border">
        <h1 className="text-[2rem] font-bold">Create a Twat account</h1>
        <GoogleSignInBtn />
        {/* <div className="w-full my-4">
          <p>Username</p>
          <input className="w-full bg-gray-100 px-4 py-2" type="text" />
        </div>

        <div className="w-full my-4">
          <p>Password</p>
          <input className="w-full bg-gray-100 px-4 py-2" type="text" />
        </div>

        <button className="w-fit px-4 py-2 bg-green-500 text-white">
          Login
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
