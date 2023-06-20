import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import searchBitcoin from "./searchBitcoin.json";
import { Wrapper, Form, IconWrapper, Input } from "./SearchBar.styles";
import { SearchResult } from "./SearchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
{
  /* <FontAwesomeIcon icon={faMagnifyingGlass} /> */
}

export const SearchBar = () => {
  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const prevSearchTermRef = useRef();
  const prevSearchTerm = prevSearchTermRef.current;
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debouncedGetCoins(searchQuery);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCoins(searchTerm);
  };

  const handleLinkChange = (e) => {
    setSearch("");
    console.log("setting searchTerm to empty");
    setIsVisible(false);
  };

  const getCoins = async (coinName) => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${coinName}`
      );
      // const data = searchBitcoin; //change to this line when out of API calls per minute

      setResults(data.coins);
      setIsVisible(true);
      setLoading(false);
    } catch (err) {
      console.log("ERROR IN GETCOINS()", err);
      setLoading(false);
      setError(true);
    }
  };

  const debouncedGetCoins = debounce(getCoins, 1000);

  useEffect(() => {
    prevSearchTermRef.current = searchTerm;
  }, [searchTerm]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <IconWrapper>
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit} />
        </IconWrapper>

        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </Form>
      <SearchResult
        results={results}
        isVisible={isVisible}
        isLoading={isLoading}
        handleLinkChange={handleLinkChange}
      />
    </Wrapper>
  );
};
