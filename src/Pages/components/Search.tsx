import SearchIcon from "./Icons/SearchIcon";

const Search = () => {
  return (
    <label htmlFor="Search" className="flex col-span-full flex-row">
      <div className="flex justify-center items-center bg-gray-50 rounded-l-xl px-6">
        <SearchIcon />
      </div>
      <input
        id="Search"
        type="search"
        className="bg-gray-50 w-full p-3 font-semibold outline-none"
        autoComplete="off"
        autoCorrect="off"
      />
      <div className="flex justify-center items-center bg-gray-50 rounded-r-xl px-3">
        <span className="bg-amber-200 px-3 py-1 rounded-lg font-bold text-blue-600">13</span>
      </div>
    </label>
  );
};

export default Search;