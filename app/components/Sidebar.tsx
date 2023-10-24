import { HiViewGridAdd } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { TbDotsVertical } from "react-icons/tb";
import Ingredients from "./ingredients/Ingredients";

const Sidebar = async () => {
  return (
    <aside className="overflow-y-scroll lg:block hidden h-screen sticky top-0">
      <div className="px-7 pt-2 pb-8 bg-main-pattern">
        <div className="flex items-center  justify-between text-white">
          <button className="text-3xl">
            <HiViewGridAdd />
          </button>
          <div className="text-center">
            <h2 className="text-2xl capitalize">My Pantry</h2>
            <p className="text-sm">You have 4 Ingredients</p>
          </div>
          <button className="text-3xl">
            <TbDotsVertical />
          </button>
        </div>

        <div className="mt-3 text-center">
          <div className="relative shadow-xl">
            <button className="absolute top-1/2 left-[1rem]    hover:text-gray-700 -translate-y-1/2 text-xl text-black">
              <IoSearch />
            </button>
            <input
              type="text"
              name=""
              placeholder="add/remove/paste ingredients"
              className="text-base p-3 pl-12 w-full rounded-md outline-none "
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl -mt-2 z-10 pb-7">
        <Ingredients />
        <div className="w-full h-[6rem] shadow-lg"></div>
      </div>
    </aside>
  );
};
export default Sidebar;
