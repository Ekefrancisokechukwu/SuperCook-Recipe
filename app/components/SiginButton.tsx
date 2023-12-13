"use client";

import { FcGoogle } from "react-icons/fc";

const SiginButton = () => {
  return (
    <button className="flex items-center text-white bg-black/90 gap-x-4 py-3 px-5 rounded-lg w-full justify-center ">
      <FcGoogle /> Sign in with Google
    </button>
  );
};

export default SiginButton;
