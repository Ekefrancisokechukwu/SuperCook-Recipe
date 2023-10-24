import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SuperCook recipe | Register",
  description: "SuperCook recipe",
};

const Register = () => {
  return (
    <div>
      <Link href={"/"}>Back</Link>
    </div>
  );
};
export default Register;
