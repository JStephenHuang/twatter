import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/3 flex flex-col p-8 border">
        <h1 className="text-[2rem] font-bold">Create a Twat account</h1>
        <div className="w-full my-4">
          <p>Username</p>
          <input className="w-full bg-gray-100 px-4 py-2" type="text" />
        </div>

        <div className="w-full my-4">
          <p>Password</p>
          <input className="w-full bg-gray-100 px-4 py-2" type="text" />
        </div>

        <button className="w-fit px-4 py-2 bg-green-500 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
