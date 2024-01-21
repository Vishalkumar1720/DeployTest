import React from "react";
const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-gradient-to-r w-full from-white via-white to-green-300 justify-center items-center">
        <h1 className="text-black font-[600] text-[18px]">
          WELCOME MEDIVEDA HOMEPAGE...
        </h1>
        <p className="text-red-400">Already have an account</p>
        <a className="text-blue-500  underline" type="button" href="./Login">
          Login
        </a>
        <p className="text-red-400">Create new account</p>
        <a className="text-blue-500 underline" type="button" href="./signup">
          Signup
        </a>
      </div>
    </>
  );
};

export default Home;
