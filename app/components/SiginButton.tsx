"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SiginButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="">
        <p>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          type="submit"
          className="mt-4 w-full bg-emerald-500 text-white text-lg p-2 font-semibold"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="flex items-center text-white bg-black/90 gap-x-4 py-3 px-5 rounded-lg w-full justify-center "
    >
      <FcGoogle /> Sign in with Google
    </button>
  );
};
export default SiginButton;
