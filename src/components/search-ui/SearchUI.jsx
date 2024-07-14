import { useState, useEffect } from "react";

const SearchUI = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cacheResults, setCacheResults] = useState({});

  useEffect(() => {
    const searchTime = setTimeout(() => {
      fetchData();
    }, 250);
    return () => clearTimeout(searchTime);
  }, [searchQuery]);

  // API for search suggestions
  const fetchData = async () => {
    if (cacheResults[searchQuery]) {
      setSearchResults(cacheResults[searchQuery]);
    } else {
      const response = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchQuery}`
      );
      const json = await response.json();
      console.log(json[1]);
      cacheResults[searchQuery] = json[1];
      setSearchResults(json[1]);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <input
        type="text"
        placeholder="search..."
        className="w-[500px] bg-white outline-none indent-6 py-3 rounded-full shadow-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {searchResults.length > 1 && showResults && (
        <ul className="text-left w-[500px] mt-1 shadow-lg p-2 border border-gray-300 rounded-lg">
          {searchResults.map((result) => (
            <li className="py-2 px-2 rounded-lg hover:bg-gray-100" key={result}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
