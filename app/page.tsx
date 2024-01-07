"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFirebaseContext } from "./context/FirebaseContext";

export default function Home() {
  const { isUserLoading, user } = useFirebaseContext();

  useEffect(() => {
    if (!isUserLoading) {
      // You know that the user is loaded: either logged in or out!

      if (user === null) {
        redirect("/login");
      }
    }
    // You also have your firebase app initialized
  }, [isUserLoading, user]);

  if (isUserLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[5rem] text-center">
        Welcome to Twatter where people twat.
      </h1>
    </div>
  );
}
