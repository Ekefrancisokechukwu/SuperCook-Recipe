import { useAppSelector } from "@/redux/store";
import SingleRecipe from "../recipe/SingleRecipe";
import { useDispatch } from "react-redux";
import { closePopup } from "@/redux/features/favourite/favouriteSlice";

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.favouriteState);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundImage: "url(./img/illustration.avif)",
      }}
      className="fixed h-screen overflow-y-auto lg:w-[calc(100%-20rem)]  w-full  z-20 top-0 right-0"
    >
      <div className="w-full h-full bg-white/60 px-3">
        <button
          onClick={() => dispatch(closePopup())}
          className="border py-1 px-5 bg-red-400 text-white mt-2 grid  ms-auto rounded-lg"
        >
          Close
        </button>
        <div className="grid grid-cols-2 gap-x-2 mt-24 ">
          {favourites.map((recipe, i) => {
            return <SingleRecipe key={i} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
