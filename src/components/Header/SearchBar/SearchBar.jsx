import { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper, Icon, Input } from "./SearchBar.styles";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log({ searchTerm });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getCoins = async () => {};

  //useEffect for componentDidUpdate - when seraching for a new coin.

  return (
    <Wrapper>
      <Icon src="icons/search.svg" />

      <Input
        type="text"
        placeholder="Search..."
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
