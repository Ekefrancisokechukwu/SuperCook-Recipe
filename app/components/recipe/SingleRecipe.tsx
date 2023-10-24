import { useSearchedRecipes } from "@/app/lib/hook";
import { useAppContext } from "@/context/context";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

type Props = {
  recipe: Recipes;
  innerRef: React.Ref<HTMLDivElement>;
};

const SingleRecipe = ({ recipe, innerRef }: Props) => {
  const { nutrients } = recipe.nutrition;
  const { openRecipeInfo } = useAppContext();

  return (
    <div
      ref={innerRef}
      className="flex sm:flex-row flex-col gap-y-2  gap-x-3 shadow-lg"
    >
      <div className="w-[14rem] h-[7rem] relative">
        <Image
          src={recipe.image}
          fill
          alt={recipe.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => openRecipeInfo(recipe.id)}
        />
      </div>

      <div className="text-gray-700 flex items-start w-full px-2 py-1  justify-between">
        <div className="">
          <h2 className="text-[1rem]">{recipe.title}</h2>

          <div className="mt-2">
            {nutrients.map((nutient, i) => {
              return (
                <h2 key={i} className="">
                  {`${nutient.name}: ${nutient.amount}${nutient.unit}`}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <button>
            <AiOutlineHeart />
          </button>
          <button
            onClick={() => {
              openRecipeInfo(recipe.id);
            }}
          >
            <GoLinkExternal />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleRecipe;
