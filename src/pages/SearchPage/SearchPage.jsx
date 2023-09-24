import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "@/components/Header";
import { Container, StyledP, StyledLink } from "./SearchPage.styles";

export const SearchPage = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    setIsClosed(true);
  };

  return (
    <Container>
      <StyledLink to={"/"}>
        <FontAwesomeIcon icon={faX} />
        <StyledP>Close</StyledP>
      </StyledLink>
      <SearchBar />
    </Container>
  );
};
