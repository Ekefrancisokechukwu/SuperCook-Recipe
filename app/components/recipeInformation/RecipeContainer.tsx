import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import { useAppContext } from "@/context/context";
import { useEffect, useState } from "react";
import { getRecipeInfo } from "@/actions/getRecipeInfo";
import SkeletonLoader from "../ui/Skeleton";
import Link from "next/link";

const RecipeContainer = () => {
  const { recipeId } = useAppContext();
  const [info, setInfo] = useState<RecipeInfo | null>(null);
  const [loading, SetLoading] = useState<boolean>(false);
  const [error, SetError] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      SetLoading(true);
      try {
        const data = await getRecipeInfo(recipeId);
        setInfo(data);
        SetLoading(false);
      } catch (error) {
        SetLoading(false);
        console.log("There was an error", error);
        SetError("There was an error");
        return null;
      }
    };

    getInfo();
  }, [recipeId]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    console.log("error");

    return (
      <div className="">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      <article>
        <div className="relative w-full h-[20rem]">
          {info?.image && (
            <Image
              src={info?.image}
              alt={info?.title!}
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div>
          <div className="px-3 relative -mt-14 bg-white rounded-md  shadow-xl z-20  w-[27rem] mx-auto">
            <div className="flex justify-between  py-4 border-b">
              <h2 className="text-[1.1rem] font-semibold text-gray-800">
                {info?.title}
              </h2>
              <button className="text-3xl">
                <AiOutlineHeart />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center py-3 text-lg">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>

              <h1 className="flex gap-1 items-center text-sm">
                <BsClock /> {info?.readyInMinutes}
              </h1>
            </div>
          </div>

          <div className="mt-4 px-6 pb-3">
            <h2 className="text-lg">Ingredients</h2>
            <ul className="mt-3 list-disc ml-6">
              {info?.extendedIngredients.map((ingredient, i) => {
                return (
                  <li key={ingredient.id + i} className="capitalize py-1 ">
                    {ingredient.nameClean}
                  </li>
                );
              })}
            </ul>

            <Link
              href={info?.sourceUrl || "default"}
              target="_blank"
              className="mt-7 text-center py-2 w-full inline-block text-white bg-rose-700 rounded-lg shadow-xl"
            >
              <h3>View full Recipe</h3>
              <h5 className="text-sm">{info?.sourceName}</h5>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
export default RecipeContainer;
