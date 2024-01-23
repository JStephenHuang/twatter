"use client";

import { User } from "./models/User";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFirebaseAuthContext } from "./context/FirebaseAuthContext";

export default function Home() {
  const { isLoading, user } = useFirebaseAuthContext();

  useEffect(() => {
    if (!isLoading) {
      if (user === null) {
        redirect("/login");
      }
    }
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
