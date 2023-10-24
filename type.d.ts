type Recipes = {
  id: number;
  usedIngredientCount?: number;
  missedIngredientCount?: number;

  title: string;
  image: string;
  nutrition: {
    nutrients: [
      {
        name: string;
        amount: number;
        unit: string;
      }
    ];
  };
};

type RecipeInfo = {
  image: string | StaticImport;
  readonly title: string;
  summary: string;
  sourceUrl: string;
  sourceName: string;
  readyInMinutes: string;
  extendedIngredients: [{ id: number; nameClean: string }];
};
type AutoCompletes = {
  id: number;
  title: string;
};
