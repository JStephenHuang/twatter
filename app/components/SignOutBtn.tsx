"use client";

import Link from "next/link";
import { useFirebaseAuthContext } from "../context/FirebaseAuthContext";

const SignOutBtn = () => {
  const { isLoading, user, signOut } = useFirebaseAuthContext();

  if (isLoading) return <div>Loading</div>;

  if (user) {
    return (
      <div className="flex items-center">
        <p className="mx-2">Welcome {user.displayName}</p>
        <button
          className="font-bold text-white bg-red-500 px-4 py-2"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <Link
        href="/login"
        className="font-bold text-white bg-blue-500 px-4 py-2"
      >
        Login
      </Link>
    );
  }
};

export default SignOutBtn;
