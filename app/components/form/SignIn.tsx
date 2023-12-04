import { loginUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/store";

const SignIn = () => {
  const dispatch = useAppDispatch();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata);
    console.log(data);
    // dispatch(loginUser(data));
  };

  return (
    <form
      onSubmit={handleSignIn}
      action=""
      className="max-w-[30rem] mx-auto bg-white "
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        autoComplete="off"
        className=" p-2 w-full shadow-xl border border-transparent focus:border focus:border-gray-400 outline-none    rounded-tr-lg rounded-tl-lg"
      />
      <input
        type="email"
        name="email"
        autoComplete="on"
        placeholder="Email"
        className=" p-2 w-full shadow-xl border border-transparent focus:border focus:border-gray-400 outline-none    "
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        className=" p-2 w-full shadow-xl border border-transparent focus:border focus:border-gray-400    outline-none rounded-br-lg rounded-bl-lg"
      />

      <button
        type="submit"
        className="mt-4 w-full bg-rose-500 text-white text-lg p-3 font-semibold"
      >
        Let's Cook
      </button>
    </form>
  );
};
export default SignIn;
