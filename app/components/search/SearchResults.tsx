import { FaRotate } from "react-icons/fa6";

type props = {
  handleItemClick: (query: string) => void;
  autoCompletes: AutoCompletes[];
  searchHistory: string[];
  searchParams: string;
};

const SearchResults = ({
  handleItemClick,
  autoCompletes,
  searchHistory,
  searchParams,
}: props) => {
  const SearchHistory = () => {
    return (
      <ul className="">
        {searchHistory.length === 0 && (
          <h1 className="text-gray-500 text-center mt-20">
            Start Searching for recipes...
          </h1>
        )}
        {searchHistory.slice(0, 7).map((search, i) => {
          return (
            <li
              key={i}
              onClick={() => handleItemClick(search)}
              className="flex items-center cursor-pointer group py-2.5  px-9 hover:bg-gray-200 transition-colors gap-x-8 w-full"
            >
              <FaRotate />
              <span>{search}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const AutoComplete = () => {
    return (
      <ul>
        {autoCompletes.length < 1 && (
          <h1 className="grid place-items-center">No Matching Search...</h1>
        )}

        {autoCompletes.map((auto) => {
          return (
            <li
              key={auto.id}
              onClick={() => handleItemClick(auto.title)}
              className="flex items-center cursor-pointer py-2.5  px-9 hover:bg-gray-200 transition-colors gap-x-8 w-full"
            >
              {auto.title}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="py-3 text-gray-500">
      {searchParams.trim() === "" ? <SearchHistory /> : <AutoComplete />}
    </div>
  );
};
export default SearchResults;
