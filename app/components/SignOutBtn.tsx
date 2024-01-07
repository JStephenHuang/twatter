"use client";

import { useFirebaseContext } from "../context/FirebaseContext";

const SignOutBtn = () => {
  const { isUserLoading, user, signOut } = useFirebaseContext();

  if (isUserLoading) return <div>Loading</div>;

  if (user) {
    return (
      <button
        className="font-bold text-white bg-red-500 px-6 py-2"
        onClick={signOut}
      >
        Sign out
      </button>
    );
  } else {
    return <p>Not logged in</p>;
  }
};

export default SignOutBtn;
