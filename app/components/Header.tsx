import { TbUserSquareRounded } from "react-icons/tb";
import { LiaLanguageSolid } from "react-icons/lia";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { openRegiter } from "@/redux/features/user/userSlice";
import { FaHeart } from "react-icons/fa";
import { openPopup } from "@/redux/features/favourite/favouriteSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favouriteState);

  return (
    <header>
      <div className="text-white flex justify-between  items-center">
        <div></div>
        <div className="text-center">
          <h2 className="text-2xl capitalize">SuperCook</h2>
          <p className="text-sm">You can make 2 recipes</p>
        </div>

        <div className="text-3xl flex gap-x-4">
          {favourites.length >= 1 && (
            <button onClick={() => dispatch(openPopup())}>
              <FaHeart className="text-base" />
            </button>
          )}

          <button onClick={() => dispatch(openRegiter())}>
            <TbUserSquareRounded />
          </button>
          <button>
            <LiaLanguageSolid />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
