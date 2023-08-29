import { useState, useEffect, useRef } from "react";
import { api } from "@/utils";
import { Wrapper, Form, IconWrapper, Input } from "./SearchBar.styles";
import { SearchResult } from "./SearchResult/SearchResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const prevSearchTermRef = useRef();

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCoins(searchTerm);
  };

  const handleLinkClick = () => {
    setSearch("");
    setIsVisible(false);
  };

  const getCoins = async (coinName) => {
    try {
      setLoading(true);

      const { data } = await api("/search", `?query=${coinName}`);

      setLoading(false);
      setResults(data.coins);
      setIsVisible(true);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

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
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </Form>
      {isVisible && (
        <SearchResult
          results={results}
          isLoading={isLoading}
          hasError={hasError}
          handleLinkClick={handleLinkClick}
        />
      )}
    </Wrapper>
  );
};
