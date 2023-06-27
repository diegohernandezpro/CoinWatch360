import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Wrapper, Form, IconWrapper, Input } from "./SearchBar.styles";
import { SearchResult } from "./SearchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import dataJson from "./searchBitcoin.json";

export const SearchBar = () => {
  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const prevSearchTermRef = useRef();
  const navigate = useNavigate();

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

  const handleLinkChange = (coinId) => {
    console.log("handleLinkChange called with coinId:", coinId);
    setSearch("");
    setIsVisible(false);
    navigate(`/coin/${coinId}`);
  };

  const getCoins = async (coinName) => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${coinName}`
      );
      // const data = dataJson;

      setLoading(false);
      setResults(data.coins);
      setIsVisible(true);
    } catch (err) {
      console.log("erorr in getCoins()");
      console.error();
      setError(true);
      setLoading(false);
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
        hasError={hasError}
        handleLinkChange={handleLinkChange}
      />
    </Wrapper>
  );
};
