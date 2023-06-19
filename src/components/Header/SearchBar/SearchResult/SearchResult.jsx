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
