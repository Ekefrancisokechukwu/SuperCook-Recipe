import Search from "./search/Search";
import { TbUserSquareRounded } from "react-icons/tb";
import { LiaLanguageSolid } from "react-icons/lia";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="text-white flex justify-between  items-center">
        <div></div>
        <div className="text-center">
          <h2 className="text-2xl capitalize">SuperCook</h2>
          <p className="text-sm">You can make 2 recipes</p>
        </div>

        <div className="text-3xl flex gap-x-4">
          <Link href={"/register"}>
            <TbUserSquareRounded />
          </Link>
          <button>
            <LiaLanguageSolid />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
