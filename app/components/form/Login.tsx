import { Input } from "@nextui-org/react";

const Login = () => {
  return (
    <form action="" className="max-w-[30rem] mx-auto bg-white ">
      <input
        type="email"
        placeholder="Email"
        className="text-center p-2 w-full shadow-xl border border-transparent focus:border focus:border-gray-400 outline-none    rounded-tr-lg rounded-tl-lg"
      />
      <input
        type="password"
        placeholder="Password"
        className="text-center p-2 w-full shadow-xl border border-transparent focus:border focus:border-gray-400    outline-none rounded-br-lg rounded-bl-lg"
      />

      <button
        type="submit"
        className="mt-4 w-full bg-emerald-500 text-white text-lg p-2 font-semibold"
      >
        Login
      </button>
    </form>
  );
};
export default Login;
