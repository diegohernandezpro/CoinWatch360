import { useState, useEffect } from "react";
import axios from "axios";
import searchBitcoin from "./searchBitcoin.json";
import { Wrapper, Form, Icon, Input } from "./SearchBar.styles";
import { SearchResult } from "./SearchResult/SearchResult";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log({ searchTerm });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCoins(searchTerm);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getCoins = async (coinName) => {
    setLoading(true);
    try {
      // const { data } = await axios(
      //   `https://api.coingecko.com/api/v3/search?query=${coinName}`
      // );
      const data = searchBitcoin; //change to get the api call
      // console.log(data.coins);

      setResults(data.coins);
      setLoading(false);
    } catch (err) {
      console.log("ERROR IN GETCOINS", err);
      setLoading(false);
      setError(true);
    }
  };

  //useEffect for componentDidUpdate - when seraching for a new coin.

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Icon src="icons/search.svg" />

        <Input
          type="text"
          placeholder="Search..."
          // isFocused={isFocused}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Form>
      <SearchResult
        results={results}
        isFocused={isFocused}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};
