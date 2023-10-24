import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { RxTrash } from "react-icons/rx";

const SingleIngredient = () => {
  return (
    <article className="text-gray-800 first-of-type:mt-0 mt-4">
      <div className="flex items-center gap-x-3 ">
        {/* <Image
          src={"https://www.supercook.com/statics/sicons/vegetables.png"}
          alt={"category"}
          width={60}
          height={60}
        /> */}
        <h2 className="capitalize">Vegetables & Greens</h2>
      </div>
      <ul className="mt-2">
        <li className="flex items-center py-3 border-b justify-between">
          <span>carrot</span>
          <button className="text-xl">
            <IoSearch />
          </button>
          <button className="text-xl">
            <RxTrash />
          </button>
        </li>
        <li className="flex  items-center py-3 border-b justify-between">
          <span>scallion</span>
          <button className="text-xl">
            <IoSearch />
          </button>
          <button className="text-xl">
            <RxTrash />
          </button>
        </li>
      </ul>
    </article>
  );
};
export default SingleIngredient;
