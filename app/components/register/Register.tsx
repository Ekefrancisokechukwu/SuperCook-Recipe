import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Login from "../form/Login";
import logo from "@/public/img/super-cook-logo.png";
import Image from "next/image";
import SignIn from "../form/SignIn";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CloseRegiter, toggleForms } from "@/redux/features/user/userSlice";
import SiginButton from "../SiginButton";

const Register = () => {
  const dispatch = useAppDispatch();
  const { isLoginForm } = useAppSelector((state) => state.userState);

  return (
    <div
      style={{
        backgroundImage: "url(./img/illustration.avif)",
        // width: "calc(100% - 20rem)",
      }}
      className="fixed h-screen lg:w-[calc(100%-20rem)]  w-full  z-20 top-0 right-0"
    >
      <div className="w-full h-full bg-white/60">
        <div className="flex justify-between items-center px-5 py-3">
          <button
            onClick={() => dispatch(CloseRegiter())}
            className="w-8 grid place-items-center h-8 bg-slate-300 rounded-full "
          >
            <BiArrowBack />
          </button>

          <button onClick={() => dispatch(toggleForms())}>
            {isLoginForm ? (
              <span className="text-danger-500">Sign up</span>
            ) : (
              <span className="text-emerald-600 font-bold">Login</span>
            )}
          </button>
        </div>

        <div className="grid place-items-center h-full">
          <div>
            <div className="w-[13rem] mx-auto mb-10">
              <Image src={logo} alt={"log"} className="w-full h-full" />
            </div>
            {isLoginForm ? <Login /> : <SignIn />}

            <div className="mt-3">
              {/* <button className="flex items-center text-white bg-black/90 gap-x-4 py-3 px-5 rounded-lg w-full justify-center ">
                <FcGoogle /> Sign in with Google
              </button> */}
              <SiginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
