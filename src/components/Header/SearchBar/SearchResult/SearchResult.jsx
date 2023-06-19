import {
  DropDownUl,
  ResultRowLi,
  StyledLink,
  LoadingWheel,
} from "./SearchResult.styles";

export const SearchResult = ({
  results,
  isVisible,
  isLoading,
  handleLinkChange,
}) => {
  //add the loading section so when div focused loading green circle appears
  return (
    <>
      {isVisible && (
        <DropDownUl>
          {results.map(({ name, symbol, id }) => (
            <ResultRowLi key={id}>
              <StyledLink to={`/coin/${id}`} onClick={handleLinkChange}>
                {name} ({symbol})
              </StyledLink>
            </ResultRowLi>
          ))}
        </DropDownUl>
      )}
    </>
  );
};

// <StyledLink to={`/coin/${coin.id}`}>
