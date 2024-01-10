"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFirebaseAuthContext } from "./context/FirebaseAuthContext";

export default function Home() {
  const { isLoading, user } = useFirebaseAuthContext();

  useEffect(() => {
    if (!isLoading) {
      // You know that the user is loaded: either logged in or out!

      if (user === null) {
        redirect("/login");
      }
    }
    // You also have your firebase app initialized
  }, [isLoading, user]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-center">
        Welcome to Twatter where people twat.
      </h1>
    </div>
  );
}
