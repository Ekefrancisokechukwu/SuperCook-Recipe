"use client";

import { useAppContext } from "@/context/context";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useDebounce } from "use-debounce";
import { useDetectClickOutside } from "react-detect-click-outside";
import SearchResults from "./SearchResults";
import { authFetch } from "@/app/lib/auth";

type Props = {
  onSearch: (query: string) => void;
  updateSearchHistory: (query: string) => void;
  searchHistory: string[];
};

const Search = ({ onSearch, updateSearchHistory, searchHistory }: Props) => {
  const [searchParams, setSearchParams] = useState("");
  const [debounced] = useDebounce(searchParams, 400);
  const [autoCompletes, setAutoCompletes] = useState<AutoCompletes[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlAutocomplete = async () => {
    if (!searchParams || searchParams.trim() === "") return;
    setLoading(true);
    try {
      const autoCompleteUrl = `https://api.spoonacular.com/recipes/autocomplete?number=6&query=${searchParams}`;
      const data = await authFetch(autoCompleteUrl);
      setAutoCompletes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const collapesBox = () => {
    setIsExpanded(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (!searchParams || searchParams.trim() === "") return;
    setSearchParams(searchParams);
    onSearch(searchParams);
    collapesBox();
  };

  const ref = useDetectClickOutside({
    onTriggered: collapesBox,
    disableKeys: false,
    triggerKeys: ["Enter", "Tab", "x"],
  });

  const expandBox = () => {
    setIsExpanded(true);
  };

  const handleItemClick = (item: string) => {
    setSearchParams(item);
    onSearch(item);
    collapesBox();
    updateSearchHistory(item);
  };
  useEffect(() => {
    handlAutocomplete();
  }, [debounced]);
  return (
    <form onSubmit={handleSubmit} className="relative shadow-xl " ref={ref}>
      <input
        type="text"
        placeholder="Find..."
        name="search"
        onFocus={expandBox}
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
        autoComplete="off"
        className="peer text-base p-3  search-input focus:placeholder:opacity-0 placeholder:transition placeholder:duration-300  pl-12 w-full rounded-md outline-none "
      />

      <button
        type="submit"
        className="absolute top-1/2 left-[1rem] peer-focus:text-black  text-gray-300 opacity  hover:text-gray-700 -translate-y-1/2 text-xl "
      >
        <IoSearch />
      </button>

      <div className="right-[1rem] absolute flex gap-3  peer-focus:first:odd:opacity-0 top-1/2  -translate-y-1/2">
        <span
          onClick={() => setSearchParams("")}
          className=" top-1/2 right-[1rem] cursor-pointer transition-opacity     text-black  text-xl "
        >
          <MdCancel />
        </span>
        {loading && (
          <span className="w-[1rem] h-[1rem] rounded-full  top-1/2 block border-t-2 border-l-2 animate-spin border-black  "></span>
        )}
      </div>

      <div
        className={`absolute top-full overflow-clip z-10 left-0 rounded-md search-box bg-white transition-height    w-full ${
          isExpanded
            ? "h-[18rem] opacity-100 visible"
            : "h-[10rem] opacity-0 invisible"
        }`}
      >
        <SearchResults
          handleItemClick={handleItemClick}
          autoCompletes={autoCompletes}
          searchHistory={searchHistory}
          searchParams={searchParams}
        />
      </div>
    </form>
  );
};
export default Search;
